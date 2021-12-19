from .tools import * 

def init(version,bdd=None):
	# On prend les données d'ugg à la place de ddragon car il y a tout ce qu'il faut et LEUR id du champion
	# Cet id est en fonction de l'arrivé du champion dans le jeu
	# Mais n'est pas recalculable or il est nécessaire pour scrap les runes
	champion_list_url = "https://static.u.gg/assets/lol/riot_static/{}/data/en_US/champion.json".format(version)
	# base_img_url      = "https://ddragon.leagueoflegends.com/cdn/{}/img/champion/".format(version)

	champion_json = ScrapJson(champion_list_url)
	champ_name_list = []

	for champion in champion_json["data"].values():
		champ_name  = champion["id"].lower()
		champ_uggId = champion["key"]

		champ_name_list.append(champ_name)

		if bdd : 
			bdd.set.addChampion(champ_uggId,champ_name)

		if __name__ == "__main__" :
			print(champ_uggId,champ_name)

	return champ_name_list

if __name__ == "__main__" :
	res = init("11.23.1")
	# res.sort()
	# print(len(res),res)
	# old = ['aatrox', 'ahri', 'akali', 'akshan', 'alistar', 'amumu', 'anivia', 'annie', 'aphelios', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'gwen', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lillia', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'monkeyking', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'qiyana', 'quinn', 'rakan', 'rammus', 'reksai', 'rell', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'samira', 'sejuani', 'senna', 'seraphine', 'sett', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vex', 'vi', 'viego', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yone', 'yorick', 'yuumi', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']
	# print(old==res)