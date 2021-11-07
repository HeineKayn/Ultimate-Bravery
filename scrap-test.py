import asyncio
import os 
import json

import requests
from urllib.request import urlopen as uReq
from urllib.request import Request
from bs4 import BeautifulSoup as soup

# ====================

# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.action_chains import ActionChains
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.common.by import By

# ==================== Fonctions récurrentes

def Scrap(url):  # Renvoie le code html d'une page 

	req = Request(url, headers = {"User-Agent": "Mozilla/5.0"})
	uClient = uReq(req)
	page_html = uClient.read()
	uClient.close()

	page_soup = soup(page_html, "html.parser")

	return page_soup

# Utilise u.gg pour les runes
# Utilise leagueofgraph pour tout le reste

#####################

base_url = 'https://www.leagueofgraphs.com/fr/champions/builds'

roles = ["top","jungle","middle","adc","support"]
champ_table = Scrap(base_url).find("table",{"class":"data_table with_sortable_column"})
champ_list = champ_table.findAll("tr") # Récolte tous les noms de champion
champ_name_list = []

for champ in champ_list : 
	try : 
		champ_url = champ.a["href"]
		if champ_url != "/fr/champions/builds/by-champion-name" :
			champ_name = champ_url[21:]
			champ_name_list.append(champ_name)
	except :
		pass

champ_name_list.sort()
print(champ_name_list)