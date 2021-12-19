from .tools import * 

def init(version,bdd=None):
	spell_list_url = "http://ddragon.leagueoflegends.com/cdn/{}/data/en_US/summoner.json".format(version)

	spell_json = ScrapJson(spell_list_url)
	spell_name_list = []

	for spell in spell_json["data"].values():
		spell_name   = spell["name"]
		spell_icon   = spell["image"]["full"]

		spell_modes        = spell["modes"]
		spell_mode_classic = 1 if "CLASSIC" in spell_modes else 0
		spell_mode_aram    = 1 if "ARAM" in spell_modes    else 0

		spell_name_list.append(spell_name)

		if __name__ == "__main__" :
			print(spell_name,spell_mode_classic,spell_mode_aram,spell_icon)

		if bdd : 
			bdd.set.addSpell(spell_name,spell_mode_classic,spell_mode_aram,spell_icon)

	return spell_name_list

if __name__ == "__main__" :
	res = init("11.23.1")
	res.sort()
	# print(len(res),res)