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

def ScrapJson(url):
	r = requests.get(url)
	return json.loads(r.content)

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
	itemName = itemName.lower()
	if "hydra" in itemName : # On fusionne les 2 hydres
		itemName = "Hydra"
	if "scythe" in itemName or "bulwark" in itemName or "pauldron" in itemName or "shard" in itemName :
		itemName = "Support"
	if "dominik" in itemName or "mortal" in itemName : 
		itemName = "Whisper"
	if "silvermere" in itemName or "scimitar" in itemName : 
		itemName = "Quicksilver"
	if "sterak" in itemName or "malmortius" in itemName:
		itemName = "Lifeline"
	if "infinity" in itemName or "guinsoo" in itemName:
		itemName = "Crit"
	if "muramana" in itemName or "manamune" in itemName or "seraph" in itemName or "archangel" in itemName:
		itemName = "Mana"
	if "hurricane" in itemName :
		itemName = ""
	if itemName == "boots" :
		itemName = ""
	return itemName.capitalize()

def loadingBar(cur_task,max_task,task,subtask="",cur_progress=0,max_progress=1):
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

def get_latest_version():
	url = "https://ddragon.leagueoflegends.com/api/versions.json"
	version_list = ScrapJson(url)
	return version_list[0]

def uggversion(version):
	saison,patch,minipatch = version.split(".")
	return "{}_{}".format(saison,patch)

# ==================== Variables

roles = ["top","jungle","middle","adc","support"]