import os 
import json

import requests
from urllib.request import urlopen as uReq
from urllib.request import Request
from bs4 import BeautifulSoup as soup

# ==================== Fonctions récurrentes

def Scrap(url):  # Renvoie le code html d'une page 
	req = Request(url, headers = {"User-Agent": "Mozilla/5.0"})
	uClient = uReq(req)
	page_html = uClient.read()
	uClient.close()
	page_soup = soup(page_html, "html.parser")
	return page_soup

def Proem(txt):  # Renvoie le caractère le plus récurrent d'un string
	char_dic = {}
	for char in txt :
		if char in char_dic : 
			char_dic[char] += 1
		else :
			char_dic[char] = 1
	key, value = max(char_dic.items(), key=lambda x:x[1])
	return(key)

# def putJson(file,data):
# 	with open(file, 'w') as outfile:
# 		json.dump(data, outfile, indent=2)

# def getJson(file):
# 	with open(file) as json_file:
# 		data = json.load(json_file)
# 	return data

def complexItemResolver(itemName):
	itemName = itemName.capitalize()
	if "Hydra" in itemName : # On fusionne les 2 hydres
		itemName = "Hydra"
	if "Scythe" in itemName or "Bulwark" in itemName or "Pauldron" in itemName or "Shard" in itemName :
		itemName = "Support"
	if "Dominik" in itemName or "Mortal" in itemName : 
		itemName = "Whisper"
	if "Silvermere" in itemName or "Scimitar" in itemName : 
		itemName = "Quicksilver"
	if "Sterak" in itemName or "Malmortius" in itemName:
		itemName = "Lifeline"
	if "Infinity" in itemName or "Guinsoo" in itemName:
		itemName = "Crit"
	if "Muramana" in itemName or "Manamune" in itemName or "Seraph" in itemName or "Archangel" in itemName:
		itemName = "Mana"
	if "Hurricane" in itemName :
		itemName = ""
	return itemName

def loadingBar(cur_task,max_task,task,subtask,cur_progress,max_progress):
	percentage = round(cur_task/max_task * 100)
	scaler     = 2 
	space      = 20
	print("\n"*space)
	print("({}/{})Loading {} : {} ({}%)...".format(cur_progress,max_progress, task, subtask, percentage))
	bar = "#"*round(percentage/scaler)
	bar += "-"*round((100-percentage)/scaler)
	print(bar)

def laneLoadingBar(lane):
	print("{}... ok".format(lane))

# ==================== Variables

roles = ["top","jungle","middle","adc","support"]

leagueOfGraphs_url = 'https://www.leagueofgraphs.com'
leagueFandom_url   = 'https://leagueoflegends.fandom.com'

championFile = "champions.txt"