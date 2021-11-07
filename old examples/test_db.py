import mariadb
import sys
import os 
from dotenv import load_dotenv

import requests
from urllib.request import urlopen as uReq
from urllib.request import Request
from bs4 import BeautifulSoup as soup

import json
import random 

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

#######################

champ_list = ['Aatrox','Ezreal','Akali','Vi','Lee Sin']
spell_list = ["AZE","AEZ","ZAE","EAZ","AZE"]

champ_list2 = [
 "ezreal",
 "caitlyn",
 "thresh",
 "ashe",
 "yasuo",
 "vayne",
 "kaisa",
 "lulu",
 "leesin",
 "ekko",
 "sett",
 "lillia",
 "senna",
 "khazix",
 "volibear",
 "karma",
 "jhin",
 "zed",
 "sylas",
 "kayn",
 "graves",
 "lucian",
 "irelia",
 "camille",
 "yuumi",
 "shen",
 "nautilus",
 "aphelios",
 "pyke",
 "bard",
 "vladimir",
 "jax",
 "darius",
 "mordekaiser",
 "morgana",
 "renekton",
 "garen",
 "leona",
 "blitzcrank",
 "lux",
 "ahri",
 "nunu",
 "akali",
 "malphite",
 "orianna",
 "riven",
 "monkeyking",
 "soraka",
 "jinx",
 "zac",
 "karthus",
 "galio",
 "kassadin",
 "swain",
 "fizz",
 "nami",
 "leblanc",
 "katarina",
 "syndra",
 "aatrox",
 "elise",
 "cassiopeia",
 "teemo",
 "nocturne",
 "fiora",
 "pantheon",
 "shaco",
 "twistedfate",
 "zoe",
 "twitch",
 "janna",
 "diana",
 "fiddlesticks",
 "nidalee",
 "maokai",
 "masteryi",
 "kindred",
 "hecarim",
 "draven",
 "velkoz",
 "olaf",
 "gragas",
 "jayce",
 "missfortune",
 "evelynn",
 "vi",
 "ornn",
 "kalista",
 "alistar",
 "jarvaniv",
 "talon",
 "xerath",
 "tristana",
 "rengar",
 "xayah",
 "shyvana",
 "urgot",
 "rakan",
 "kogmaw",
 "reksai",
 "tryndamere",
 "warwick",
 "zilean",
 "veigar",
 "poppy",
 "brand",
 "gangplank",
 "nasus",
 "zyra",
 "braum",
 "sion",
 "ryze",
 "gnar",
 "sona",
 "qiyana",
 "sivir",
 "viktor",
 "kennen",
 "malzahar",
 "rumble",
 "azir",
 "kayle",
 "rammus",
 "corki",
 "lissandra",
 "annie",
 "taric",
 "kled",
 "chogath",
 "amumu",
 "quinn",
 "trundle",
 "sejuani",
 "singed",
 "varus",
 "neeko",
 "skarner",
 "illaoi",
 "ziggs",
 "anivia",
 "ivern",
 "drmundo",
 "yorick",
 "xinzhao",
 "heimerdinger",
 "taliyah",
 "udyr",
 "tahmkench",
 "aurelionsol"
]

############################################################################################
############################################################################################


Q_Skill = "INSERT INTO SkillOrder (ordre, championID) VALUES (%s,(SELECT ID FROM Champion WHERE nom = %s)) ON DUPLICATE KEY UPDATE ordre = VALUES(ordre), championID = VALUES(championID)"

# cur.execute("ALTER TABLE SkillOrder ADD CONSTRAINT unique_combi UNIQUE (ordre, championID)")

#######################

# Q_SkillOrder = "SELECT ordre FROM SkillOrder WHERE ChampionID = (SELECT id FROM Champion WHERE nom = (%s) LIMIT 1)"
# cur.execute(Q_SkillOrder,('aatrox',))
# ordre = cur.fetchone()[0]
# print(ordre)

# cur.execute("DROP TABLE Keystone")

# cur.execute("SELECT * FROM Keystone ORDER BY id")
# for x in cur :
# 	print(x) 

# cur.execute("SELECT keystoneID FROM Interm_Keystone WHERE championID = (SELECT id FROM Champion WHERE nom = 'vladimir') AND laneID = (SELECT id FROM Lane WHERE nom = 'top') ORDER BY pickrate DESC")
# lis = cur.fetchall()
# for item in lis :
# 	cur.execute("SELECT nom FROM Keystone WHERE id = (%s)",item)
# 	for x in cur : 
# 		print(x)

# cur.execute("SELECT * FROM Lane WHERE nom = 'jungle'")
# cur.execute("DESCRIBE Interm_Keystone")
# cur.execute("SHOW TABLES")

# cur.execute("SELECT * FROM Interm_Lane WHERE championID = (SELECT id FROM Champion WHERE nom = 'shaco') ORDER BY winrate DESC")
# for x in cur :
# 	print(x)

######################

Q_Item = """
	        SELECT nom
	        FROM Interm_Item
	        INNER JOIN Item
	        ON Item.id = Interm_Item.itemID 
	            WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
	            AND laneID = (SELECT id FROM Lane WHERE nom = %s) 
	            AND nom NOT IN ({})
	        ORDER BY pickrate DESC, winrate DESC
	        LIMIT 3
        """

# Q_Item = Q_Item.replace("item","botte")
# Q_Item = Q_Item.replace("Item","Botte")

# cur.execute(Q_Item,('akali','jungle',))
# for c,x in enumerate(cur):
# 	print(c,x)


banned_item = ["Voleur d'âmes de Mejai","Ange gardien"]
for c,item in enumerate(banned_item) :
	banned_item[c] = '"' + item + '"'
banned_string = ",".join(banned_item)

Q_Item = Q_Item.format(banned_string)

cur.execute(Q_Item,('vi','jungle',))
items = cur.fetchall()
for item in items :
	print(item)

# from PIL import Image,ImageFont,ImageDraw

	# x = x.replace(":","")
	# img = Image.open("./" + x + ".png")
	# img.close()

# Q_SkillOrder = "SELECT ordre FROM SkillOrder WHERE ChampionID = (SELECT id FROM Champion WHERE nom = 'kaisa')"
# cur.execute(Q_SkillOrder)
# ordre = cur.fetchone()[0]
# print(ordre)
