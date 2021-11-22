from .tools import * 

def run(champ_name,lane,existing_items,bdd=None):

	champ_build_url = "https://www.leagueofgraphs.com/en/champions/items/{}/{}".format(champ_name,lane)
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
			icon = item.td.img["src"] # <<<<----- rajouté 

			name = complexItemResolver(name)
			if name == "" :
				break

			item_processed.append(name)
			
			if __name__ == "__main__" :
				print(name, pickrate, winrate)

			if bdd :
				bdd.get.intermItem_Update(winrate,pickrate,champ_name,lane,name)

		except : 
			pass

	# Si il y'a des items existant sur lesquels on a pas d'info, on met leurs stats à 0
	forgotten_item_list = [x for x in existing_items if x not in item_processed]
	for item in forgotten_item_list : 
		pickrate = 0.0
		winrate = 0.0

		if bdd :
			bdd.set.intermItem_Update(winrate,pickrate,champ_name,lane,name)

if __name__ == "__main__" :
	test_champ_name = "aatrox"
	test_lane = "jungle"

	# champ_list = ['aatrox', 'ahri', 'akali', 'akshan', 'alistar', 'amumu', 'anivia', 'annie', 'aphelios', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'gwen', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lillia', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'monkeyking', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'qiyana', 'quinn', 'rakan', 'rammus', 'reksai', 'rell', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'samira', 'sejuani', 'senna', 'seraphine', 'sett', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vex', 'vi', 'viego', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yone', 'yorick', 'yuumi', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']
	# for champ in champ_list :
	# 	try :
	# 		run(champ,test_lane)
	# 	except :
	# 		print(champ)

	run(test_champ_name,test_lane)