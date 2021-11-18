from tools import * 

def init(version,bdd=None):
	rune_list_url = "http://ddragon.leagueoflegends.com/cdn/{}/data/en_US/runesReforged.json".format(version)

	# format -> tree, rune_name, rune_name.json (attention bdd rune name a des majs, ici c'est full minuscule)
	base_img_url  = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/{}/{}/{}.json"

	rune_trees = ScrapJson(rune_list_url)

	for rune_type in ["primary","secondary"]:
		for tree in rune_trees:
			rune_tree = tree["name"]
			for rune_ligne,slot in enumerate(tree["slots"]):
				for rune_dic in slot["runes"]:
					rune_id  = rune_dic["id"]
					rune_name = rune_dic["key"]
					rune_name = rune_name.lower()

					if rune_type == "primary" and rune_ligne == 0 :
						break

					if bdd :
						bdd.set.addRune(rune_id,rune_name,rune_tree,rune_ligne,rune_type)

					# ICON PAS OK
					if __name__ == "__main__" :
						print(rune_tree,rune_type, rune_ligne, rune_id, rune_name)

if __name__ == "__main__" :
	init("11.23.1")