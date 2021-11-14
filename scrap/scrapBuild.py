from tools import * 

def run(champ_name,lane,cur=None):
	champ_build_url = leagueOfGraphs_url + "/en/champions/items/{}/{}".format(champ_name,lane)
	champ_build_page_content = Scrap(champ_build_url).find("div",{"id":"mainContentContainer"})
	champ_build_table = champ_build_page_content.findAll("div",{"class":"box box-padding-10"})[-3]

	item_list = champ_build_table.findAll("tr")[1:]
	item_processed = []

	for item in item_list :

		try : 
			bars = item.findAll("progressbar")

			pickrate = float(bars[0]["data-value"]) * 100
			winrate = float(bars[1]["data-value"]) * 100
			name = item.td.img["alt"]

			name = complexItemResolver(itemName)
			if name == "" :
				break

			item_processed.append(name)
			
			# Seulement pour les tests
			print(name, pickrate, winrate)

			if cur :
				Q_Item_Update = "INSERT INTO Interm_Item (winrate, pickrate, championID, laneID, itemID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Item WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), ItemID = VALUES(ItemID)"
				cur.execute(Q_Item_Update,(winrate,pickrate,champ_name,role,name))

		except : 
			pass

	# LIGNE A MODIFIER (faire classe ???)
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

if __name__ == "__main__" :
	test_champ_name = "aatrox"
	test_lane = "jungle"

	champ_list = ['aatrox', 'ahri', 'akali', 'akshan', 'alistar', 'amumu', 'anivia', 'annie', 'aphelios', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'gwen', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lillia', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'monkeyking', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'qiyana', 'quinn', 'rakan', 'rammus', 'reksai', 'rell', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'samira', 'sejuani', 'senna', 'seraphine', 'sett', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vex', 'vi', 'viego', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yone', 'yorick', 'yuumi', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']
	for champ in champ_list :
		try :
			run(champ,test_lane)
		except :
			print(champ)

	# run(test_champ_name,test_lane)