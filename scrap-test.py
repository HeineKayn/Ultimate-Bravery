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

def ScrapBetter(url):  # Renvoie le code html d'une page 
	req = requests.get(url)
	page_soup = soup(req.text, "html.parser")
	return page_soup

# base_url = "https://www.leagueofgraphs.com/champions/skills-orders/viktor/jungle"
# scrapped = ScrapBetter(base_url)
# scrapped = scrapped.find("div",{"id":"mainContent"})
# print(scrapped)


class a():

	def commit(self,func):
		def wrap(*args, **kwargs):
			result = func(*args, **kwargs)
			print("commiting")
			return result
		return wrap
  
aaa = a()

@aaa.commit
def countdown(n):
	print(n)
  
# countdown(5)
# countdown(1000)

def poulet(dinde,*args):
	print(dinde)
	print(len(args))

# poulet(1,2,3,4,5)

# a = 2 if "1" == "1" else 0
# print(a)

if True : print("a")