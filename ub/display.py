from .bdd  import BDD
from .pick import Picker

import shutil
import requests
from PIL import Image,ImageFont,ImageDraw
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
import numpy as np

color = (170,170,170)

def AddText(text,size,x,y):
	font = ImageFont.truetype("arial.ttf",size)
	draw = ImageDraw.Draw(bg)
	draw.text((x,y),text,font=font,fill=color)

def AddRectangle(x0,y0,x1,y1,color):
	draw=ImageDraw.Draw(bg)
	draw.rectangle(((x0, y0), (x1, y1)), fill=color)

def AddBord(img,x,y):
	t = 2
	s = img.size[0] + t - 1
	AddRectangle(x-t,y-t,x+s,y+s,color)

def AddImg(url,x,y,bord=False,size=None,alpha=False):

	out = path = "./ressources/tempImage.png"
	if ".svg" in url :
		out = "./ressources/tempImage.svg"

	response = requests.get(url,stream=True, headers={'User-agent': 'Mozilla/5.0'})
	if response.status_code == 200:
		with open(out, 'wb') as f:
			response.raw.decode_content = True
			shutil.copyfileobj(response.raw, f)

	if ".svg" in url :
		drawing = svg2rlg(out)
		renderPM.drawToFile(drawing, path, fmt='PNG')

	img = Image.open(path) 
	if size :
		img = img.resize(size)

	# ENLEVER LE BLANC
	if alpha :
		orig_color = (255,255,255,0)
		replacement_color = (255,0,0,0)	
		img = img.convert('RGBA')
		datas = img.getdata()

		newData = []
		for item in datas:
		    if item[0] == 255 and item[1] == 255 and item[2] == 255:
		        newData.append((255, 255, 255, 0))
		    else:
		        newData.append(item)
		img.putdata(newData)

	if bord:
		AddBord(img,x,y);
	bg.paste(img,(x,y))

def MiseFormeTexte(texte,x,y,w=9999,sfont = 35): # sfont ( taille de base ) = 35
	font = ImageFont.truetype("arial.ttf",sfont)
	if font.getsize(texte)[0] > w :
		sfont -= 1
		MiseFormeTexte(texte,w,x,y,sfont)
	else:
		draw = ImageDraw.Draw(bg)
		draw.text((x,y),texte,font=font,fill=color)

class Displayer():

	def __init__(self,bdd):
		self.bdd = bdd
		self.pick = Picker(bdd)

	def run(self,difficulte,carte,champion_notowned):
		dic = self.pick.run(difficulte,carte,champion_notowned)

		global bg
		margin = 25
		bg = Image.new('RGBA',(730,360),(255,0,0,0)) # remplacer white par (255,0,0,0)
		x = margin
		y = margin
		AddImg(dic["champion"]["icon"],x,y) 
		x += 120 + margin 
		AddText(dic["champion"]["name"].capitalize(),50,x,y)

		y += 40 + margin
		MiseFormeTexte(dic["titre"],x,y,(margin+6*80+70)-(120+4*margin))
		x = margin
		y += 90
		for spell in dic["spell"]:
			 AddImg(spell["icon"],x,y)
			 x += 80
		AddImg(dic["ordre"]["icon"],x,y)
		x += 80
		if carte != "aram" :
			AddImg(dic["lane"]["icon"],x,y,size=(64,64),alpha=True)
		x = margin
		y += 90
		for item in dic["item"]:
			 AddImg(item["icon"],x,y)
			 x += 80

		x += margin
		AddRectangle(x,margin,x+5,bg.size[1]-margin,color)
		x += 5 + margin
		y = margin
		runes = dic["rune"]
		primaire = [runes["Keystone"]] + runes["Primary"]
		for rune in primaire:
			AddImg(rune["icon"],x,y,size=(64,64),alpha=True)
			y += 80
		x += 80
		y = margin
		for rune in runes["Secondary"]:
			AddImg(rune["icon"],x,y,size=(64,64),alpha=True)
			y += 80
		x += 15
		y += 5

		return bg
		

if __name__ == "__main__" :
	bdd  = BDD()
	pick = Picker(bdd)
	disp = Displayer(bdd)

	dic = pick.run(0,"classic",[])
	res = disp.run(dic)
	res.show()