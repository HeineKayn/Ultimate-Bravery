from PIL import Image,ImageFont,ImageDraw
import os 

# ub[0] : champ
# ub[1] : titre
# ub[2] : items
# ub[3] : summ
# ub[4] : rune
# ub[5] : poste
# ub[6] : max

# cadre
# 12750
# 6250

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

def AddImg(categorie,nom,x,y,bord=False):
	nom = nom.capitalize()
	img = Image.open("./annexes/ub/imgub/" + categorie + "/" + nom + ".png")
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
	
def DisplayUB(dic):
	global bg
	margin = 25
	bg = Image.new('RGBA',(730,360),(255,0,0,0)) # remplacer white par (255,0,0,0)
	x = margin
	y = margin
	AddImg("champion",dic["champion_name"],x,y) 
	x += 120 + margin 
	AddText(dic["champion_name"].capitalize(),50,x,y)

	y += 40 + margin
	MiseFormeTexte(dic["titre"],x,y,(margin+6*80+70)-(120+4*margin))
	x = margin
	y += 90
	for i in dic["summ"]:
		 AddImg("summs",i,x,y)
		 x += 80
	AddImg("max",dic["ordre"],x,y)
	x += 80
	AddImg("roles",dic["lane"],x,y)
	x = margin
	y += 90
	for i in dic["item"]:
		 AddImg("items",i,x,y)
		 x += 80

	x += margin
	AddRectangle(x,margin,x+5,bg.size[1]-margin,color)
	x += 5 + margin
	y = margin
	runes = dic["rune"]
	primaire = runes["Keystone"] + runes["Primary"]
	for i in primaire:
		i = i.replace(":","")
		AddImg("runes",i,x,y)
		y += 80
	x += 80
	y = margin
	for i in runes["Secondary"]:
		i = i.replace(":","")
		AddImg("runes",i,x,y)
		y += 80
	x += 15
	y += 5
	# for i in data[4][2][1]:        # On a enlevé les stats
	# 	AddImg("runes",i,x,y)
	# 	y += 50
	return bg

	# bg.show()
	# bg.save('test.png', 'PNG')

# a = DisplayUB(0,"")
# a.show()