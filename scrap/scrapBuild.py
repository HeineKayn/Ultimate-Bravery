from tools import * 

def run(champ_name,lane,cur=None):
	champ_build_url = leagueOfGraphs_url + "/fr/champions/items/" + champ_name

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