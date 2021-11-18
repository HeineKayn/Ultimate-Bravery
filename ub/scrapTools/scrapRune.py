from tools import * 

def init(bdd=None):
	url="https://static.u.gg/assets/lol/riot_static/11.22.1/data/en_US/runesReforged.json"
	rune_trees = ScrapJson(url)

	for rune_type in ["primary","secondary"]:
		for tree in rune_trees:
			tree_name = tree["name"]
			for rune_ligne,slot in enumerate(tree["slots"]):
				for rune_dic in slot["runes"]:
					rune_id  = rune_dic["id"]
					rune_key = rune_dic["key"]
					rune_icon = rune_dic["icon"]

					if rune_type == "primary" and rune_ligne == 0 :
						break

					# print(tree_name,rune_type, rune_ligne, rune_id, rune_key)

init()