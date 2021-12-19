from .tools import * 

def run(champ_name,bdd=None):
	champ_skills_url = "https://www.leagueofgraphs.com/champions/skills-orders/{}".format(champ_name)

	champ_skills_page_content = Scrap(champ_skills_url).find("div",{"id":"mainContent"})
	champ_skills_table = champ_skills_page_content.findAll("div",{"class":"responsive-table skillsOrdersTableContainer"})
	
	# Certains champions peuvent augmenter un sort de plus lorsqu'ils arrivent à un certain stade
	# Cela rajoute une table en plus sur la page, on l'enlève donc
	champ_casse_couille = ["viktor","kaisa","khazix","viego"]
	if champ_name in champ_casse_couille : 
		champ_skills_table = champ_skills_table[1:]

	# On prend seulement la première (la meilleure)
	table = champ_skills_table[0]

	up_list = table.findAll("tr")[1:4]
	up_a = up_list[0].findAll("td")[1:]
	up_z = up_list[1].findAll("td")[1:]
	up_e = up_list[2].findAll("td")[1:]
	spell_order_full = ""

	# Ajoute le texte colonne par colonne (sans les espaces donc juste 1 lettre par colonne)
	for i in range(18) : 
		spell_order_full += up_a[i].text.strip()
		spell_order_full += up_z[i].text.strip()
		spell_order_full += up_e[i].text.strip()

	# Renvoie seulement les 3 lettres triés dans leur ordre de maxing
	spell_order = Proem(spell_order_full[:6]) + Proem(spell_order_full[6:-4]) + Proem(spell_order_full[-4:]) 

	# Seulement pour les tests
	if __name__ == "__main__" :
		print(champ_name,spell_order)

	if bdd :
		bdd.set.intermSkillOrder_Update(champ_name,spell_order)

if __name__ == "__main__" :
	test_champ_name = "aatrox"
	test_lane = "middle"

	champ_list = ['aatrox', 'ahri', 'akali', 'akshan', 'alistar', 'amumu', 'anivia', 'annie', 'aphelios', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'gwen', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lillia', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'monkeyking', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'qiyana', 'quinn', 'rakan', 'rammus', 'reksai', 'rell', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'samira', 'sejuani', 'senna', 'seraphine', 'sett', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vex', 'vi', 'viego', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yone', 'yorick', 'yuumi', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']
	for champ in champ_list :
		run(champ)
		# try :
		# 	run(champ,test_lane)
		# except :
		# 	print(champ)

	# run(test_champ_name,test_lane)