import asyncio
import os 
import json

# ====================

from dotenv import load_dotenv
import mariadb

# ====================

import requests
from urllib.request import urlopen as uReq
from urllib.request import Request
from bs4 import BeautifulSoup as soup

# ====================

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

# ==================== Ouverture de la base de donnée d'Iratan

load_dotenv()

user = os.getenv('DB_User')
password = os.getenv('DB_Password')
host = os.getenv('DB_Host')
port = int(os.getenv('DB_Port'))

try:
    conn = mariadb.connect(
        user=user,
        password=password,
        host=host,
  		port=port,
  		database="ub"
    )

except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

cur = conn.cursor()

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

# ==================== 

# Utilise u.gg pour les runes
# Utilise leagueofgraph pour tout le reste

#####################

base_url = 'https://www.leagueofgraphs.com'

roles = ["top","jungle","middle","adc","support"]
champ_name_list = []
item_name_list = []
botte_name_list = []

champ_retry = []
champ_failed = []

# ==================== Activer / Désactiver les scrapper

do_lane = False
do_item = False
do_bottes = True
do_keystone = False
do_skill = False

all_champ = True
all_lane = True

do_update = True

# ==================== Importer liste de champion à retry

# champ_retry = ["akali"]

# ============== Initialise la table lane 

# for lane in roles :
# 	cur.execute("INSERT INTO Lane (nom) VALUES (%s)",(lane,))

# ==================== Crée la liste des champions

if not champ_retry :

	base_url = 'https://www.leagueofgraphs.com'
	list_url_full = base_url + "/fr/champions/builds"

	champ_table = Scrap(list_url_full).find("table",{"class":"data_table with_sortable_column"})
	champ_list = champ_table.findAll("tr") # Récolte tous les noms de champion

	champ_list = champ_list[1:]

	for champ in champ_list :

		try :
			champ_url = champ.a["href"]
			if champ_url != "/fr/champions/builds/by-champion-name" :
				champ_name = champ_url[21:]
				champ_name_list.append(champ_name)

				# cur.execute("INSERT INTO Champion (nom) VALUES (%s)",(champ_name,))

		except : 
			pass

else : 
	champ_name_list = champ_retry

# ==================== Boucles

# champ_name_list = champ_list[:5]
champ_name_list.sort()

for task_count, champ_name in enumerate(champ_name_list) :

	print(champ_name)

	try :

		champ_url = "/fr/champions/builds/" + champ_name

		if do_lane : 

			champ_lane_url = champ_url.replace("builds","stats")
			champ_lane_url = base_url + champ_lane_url

			champ_lane_page_content = Scrap(champ_lane_url).find("div",{"id":"mainContent"})
			champ_lane_table = champ_lane_page_content.findAll("div",{"class":"medium-12 small-24 columns"})[1]
			champ_lane_list = champ_lane_table.findAll('tr')

			for lane in champ_lane_list[1:] : 

				try :

					bars = lane.findAll("progressbar")

					pickrate = float(bars[0]["data-value"]) * 100
					winrate = float(bars[1]["data-value"]) * 100
					name = lane.td.img["alt"]

					if name == "Jungler" : 
						name = "Jungle"
					elif name == "Mid" : 
						name = "Middle"

					print(name, pickrate, winrate)
					
					if do_update :
						Q_Lane_Update = "INSERT INTO Interm_Lane (winrate, pickrate, championID, laneID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID)"
						cur.execute(Q_Lane_Update,(winrate,pickrate,champ_name,name))

				except :
					pass

		#####################################
		############### Items ###############

		if do_item : 

			champ_build_url = champ_url.replace("builds","items")
			champ_build_url = base_url + champ_build_url

			item_complet_doc = open("./item_name_list.txt", "r") # Je récupére la liste totale des items
			item_complet = item_complet_doc.read() 
			item_complet_list = item_complet.split("\n")
			item_complet_doc.close()

			for role in roles :

				champ_build_url_poste = champ_build_url + "/" + role
				champ_build_page_content = Scrap(champ_build_url_poste).find("div",{"id":"mainContentContainer"})
				champ_build_table = champ_build_page_content.findAll("div",{"class":"box box-padding-10"})[-3]

				item_list = champ_build_table.findAll("tr")[1:]
				item_present_list = [] # Je stock la liste des items qui sont sur la page 

				for item in item_list :

					try : 

						bars = item.findAll("progressbar")

						pickrate = float(bars[0]["data-value"]) * 100
						winrate = float(bars[1]["data-value"]) * 100
						name = item.td.img["alt"]

						if not "Enchantement" in name and not "Cœur Hextech parfait" in name : # On enlève les items durs à gérer

							if "Hydre" in name : # On fusionne les 2 hydres
								name = "Hydre"

							if name not in item_name_list : 
								item_name_list.append(name)		# La liste de nom d'item totale
								# Q_Item = "INSERT INTO Item (nom) VALUES (%s)"
								# cur.execute(Q_Item,(name,))

							if name not in item_present_list : 
								item_present_list.append(name)	# La liste de nom d'item présent sur la page du champion
							
							# print(name, pickrate, winrate)

							if do_update :
								Q_Item_Update = "INSERT INTO Interm_Item (winrate, pickrate, championID, laneID, itemID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Item WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), ItemID = VALUES(ItemID)"
								cur.execute(Q_Item_Update,(winrate,pickrate,champ_name,role,name))

					except : 
						pass

				forgotten_item_list = [x for x in item_complet_list if x not in item_present_list]
				for item in forgotten_item_list : 
					
					# Si un de ces items est pas conseillé pour le perso ça veut dire qu'il est peut être pas achetable donc on met pas les potentiels casse couille
					# Quitte à pas pouvoir avoir kassadin Hydre Vorace, au moins pas d'erreur

					if not "Enchantement" in item and not "Cœur Hextech parfait" in item and not "Sterak" in item and not "Hydre" in item and not "Ouragan" in item: 

						pickrate = 0.0
						winrate = 0.0

						if do_update :
							Q_Missing_Item_Update = "INSERT INTO Interm_Item (winrate, pickrate, championID, laneID, itemID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Item WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), ItemID = VALUES(ItemID)"
							cur.execute(Q_Missing_Item_Update,(winrate,pickrate,champ_name,role,item))

				if not all_lane : 
					break

		#####################################
		############### Bottes ##############

		if do_bottes : 

			botte_complet_list = ['Bottes de célérité', 'Bottes de lucidité', 'Bottes de mobilité', 'Chaussures de sorcier', 'Jambières du berzerker', 'Sandales de Mercure', 'Tabi ninja']

			champ_build_url = champ_url.replace("builds","items")
			champ_build_url = base_url + champ_build_url

			for role in roles :

				botte_present_list = []

				champ_build_url_poste = champ_build_url + "/" + role
				champ_build_page_content = Scrap(champ_build_url_poste).find("div",{"id":"mainContentContainer"})
				champ_build_table = champ_build_page_content.findAll("div",{"class":"box box-padding-10"})[-4]

				botte_list = champ_build_table.findAll("tr")

				for botte in botte_list[1:] :

					try : 

						bars = botte.findAll("progressbar")

						pickrate = float(bars[0]["data-value"]) * 100
						winrate = float(bars[1]["data-value"]) * 100
						name = botte.td.img["alt"]

						if name != "Bottes de vitesse" and name != "Bottes légèrement magiques": 

							if name not in botte_name_list : 
								botte_name_list.append(name)

								# Q_Botte = "INSERT INTO Botte (nom) VALUES (%s)"
								# cur.execute(Q_Botte,(name,))

							botte_present_list.append(name)
							# print(name, pickrate, winrate)

							if do_update :
								Q_Botte_Update = "INSERT INTO Interm_Botte (winrate, pickrate, championID, laneID, botteID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Botte WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), BotteID = VALUES(BotteID)"
								cur.execute(Q_Botte_Update,(winrate,pickrate,champ_name,role,name))

					except : 
						pass

				forgotten_botte_list = [x for x in botte_complet_list if x not in botte_present_list]
				for botte in forgotten_botte_list : 

					pickrate = 0.0
					winrate = 0.0

					if do_update :
						Q_Missing_Botte_Update = "INSERT INTO Interm_Botte (winrate, pickrate, championID, laneID, botteID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Botte WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), BotteID = VALUES(BotteID)"
						cur.execute(Q_Missing_Botte_Update,(winrate,pickrate,champ_name,role,botte))

				if not all_lane : 
					break

		#####################################
		############### Keystones ###########

		if do_keystone : 

			PATH = "C:\Program Files (x86)\chromedriver.exe"

			options = Options()
			options.add_argument('--ignore-certificate-errors')
			options.add_argument('--incognito')
			# options.add_argument('--headless')

			driver = webdriver.Chrome(PATH, options=options) # On utilise Selenium parce que la page utilise du javascript et qu'il faut attendre qu'elle charge
			champ_keystone_url = "https://u.gg/lol/champions/" + champ_name + "/runes"

			driver.get(champ_keystone_url)
			WebDriverWait(driver, 10).until( # Attends que la page se soit chargée et qu'on puisse trouver un bout du code
					EC.visibility_of_element_located((By.CLASS_NAME, "champion-profile-page")))

			rune_count = 0
			
			for role in roles :
				champ_keystone_url_poste = champ_keystone_url + "?role=" + role
				driver.get(champ_keystone_url_poste)

				WebDriverWait(driver, 10).until( # Attends que la page se soit chargée et qu'on puisse trouver un bout du code
					EC.visibility_of_element_located((By.CLASS_NAME, "champion-profile-page")))

				rune_count = 0

				try :
					page_soup = soup(driver.page_source, "html.parser") # Repars avec beautifullsoup
					big_table = page_soup.find("div",{"class":"runes-table-container"})
					tables = big_table.findAll("div",{"class":"grid-block"})

					for table in tables : 
						header = table.find("div",{"class":"grid-block-header"}).div
						RuneGenre = header.h2.text
						RuneType = header.findAll("span")[1].text

						table = table.find("div",{"class":"grid-block-content"})

						keystones = table.find("div",{"class":"grid-block-content-keystones"})
						lignes = table.findAll("div",{"class":"grid-block-content-runes"})

						if keystones : 
							lignes = [keystones] + lignes
						
						# print(RuneGenre,RuneType)

						for numero,ligne in enumerate(lignes) : 

							if keystones :

								if numero == 0 :
									RuneType = 'Keystone'
								elif numero != 0 :
									RuneType = 'Primary'
							else :
								RuneType = 'Secondary'

							runes = ligne.findAll("div",{"class":"rune"})
							for rune in runes : 

								name = rune.img["alt"]
								winrate = rune.find("div",{"class":"win-rate"}).text
								pickrate = rune.find("div",{"class":"pick-rate"}).text

								if winrate == "-" :
									winrate = 0
								else :
									winrate = float(winrate[:-1])

								if pickrate == "-" :
									pickrate = 0
								else : 
									pickrate = float(pickrate[:-1])

								rune_count += 1

								# print(numero,name,RuneType,RuneGenre,winrate,pickrate)

								# Q_Rune = "INSERT INTO Keystone (nom,genre,ligne,type) VALUES (%s,%s,%s,%s)"
								# cur.execute(Q_Rune,(name,RuneGenre,numero,RuneType))	

								if do_update :
									try : 
										Q_Keystone_Update = "INSERT INTO Interm_Keystone (winrate, pickrate, championID, laneID, keystoneID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Keystone WHERE nom = %s and ligne = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), KeystoneID = VALUES(KeystoneID)"
										cur.execute(Q_Keystone_Update,(winrate,pickrate,champ_name,role,name,numero))
									except :
										pass

				except : 
					pass		

				if not all_lane : 
					break

				if rune_count == 109 : 
					print("OK",role)	
				else :
					print("ERREUR : ", champ_name , role)

					if champ_name not in champ_failed : 
						champ_failed.append(champ_name)

			driver.quit()		


		#####################################
		############### Skills ##############

		if do_skill : 

			champ_skills_url = champ_url.replace("builds","skills-orders")
			champ_skills_url = base_url + champ_skills_url

			champ_skills_page_content = Scrap(champ_skills_url).find("div",{"id":"mainContent"})
			champ_skills_table = champ_skills_page_content.findAll("div",{"class":"responsive-table skillsOrdersTableContainer"})
			
			champ_casse_couille = ["viktor","kaisa","khazix"]
			if champ_name in champ_casse_couille : 
				champ_skills_table = champ_skills_table[1:]

			table = champ_skills_table[0]

			up_list = table.findAll("tr")[1:4]
			up_a = up_list[0].findAll("td")[1:]
			up_z = up_list[1].findAll("td")[1:]
			up_e = up_list[2].findAll("td")[1:]
			spell_order_full = ""

			for i in range(18) : # Ajoute le texte colonne par colonne (sans les espaces donc juste 1 lettre par colonne)
				spell_order_full += up_a[i].text.strip()
				spell_order_full += up_z[i].text.strip()
				spell_order_full += up_e[i].text.strip()

			# Renvoie seulement les 3 lettres triés dans leur ordre de maxing
			spell_order = Proem(spell_order_full[:6]) + Proem(spell_order_full[6:-4]) + Proem(spell_order_full[-4:]) 

			if do_update :
				Q_Skill_Update = "INSERT INTO SkillOrder (ordre, championID) VALUES (%s,(SELECT ID FROM Champion WHERE nom = %s)) ON DUPLICATE KEY UPDATE ordre = VALUES(ordre), championID = VALUES(championID)"
				cur.execute(Q_Skill_Update,(spell_order,champ_name))


		#####################################
		############### End #################

		# print(base_url)
		# print(champ_build_url)
		print("{}/{} terminé\n".format(task_count+1,len(champ_name_list)))

	except : 
		pass

	if not all_champ : 
		break

	# champ_failed.append(champ_name)	

if champ_failed :
	print(len(champ_failed))
	print(champ_failed)

# with open("champ_list.txt",'w') as outfile : 
#     json.dump(champ_failed,outfile,indent=1)