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

def putJson(file,data):
	with open(file, 'w') as outfile:
		json.dump(data, outfile, indent=2)

def getJson(file):
	with open(file) as json_file:
   		data = json.load(json_file)

# ==================== Variables

leagueOfGraphs_url = 'https://www.leagueofgraphs.com'
roles = ["top","jungle","middle","adc","support"]

championFile = "champions.txt"
