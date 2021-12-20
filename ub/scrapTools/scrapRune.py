from .tools import * 

def init(version,bdd=None):
	url = "http://ddragon.leagueoflegends.com/cdn/{}/data/en_US/runesReforged.json".format(version)

	# format -> tree, rune_name, rune_name (attention bdd rune name a des majs, ici c'est full minuscule)
	# base_img_url  = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/{}/{}/{}.png"

	rune_trees = ScrapJson(url)

	# On le fait 2 fois pour avoir les runes avec le type Primaire et les autres avec Secondaire
	for rune_type in ["primary","secondary"]:
		for tree in rune_trees:
			rune_tree = tree["name"]
			for rune_ligne,slot in enumerate(tree["slots"]):
				for rune_dic in slot["runes"]:
					rune_id  = rune_dic["id"]
					rune_icon = rune_dic["icon"]
					rune_name = rune_dic["key"]
					rune_name = rune_name.lower()

					if rune_type == "secondary" and rune_ligne == 0 :
						break

					if bdd :
						bdd.set.addRune(rune_id,rune_name,rune_tree,rune_ligne,rune_type, rune_icon)

					if __name__ == "__main__" :
						print(rune_tree, rune_type, rune_ligne, rune_id, rune_name, rune_icon)

def run(champ_name,version,bdd=None):

	if __name__ == "__main__" :
		ID = "266"
	else : 
		ID = str(bdd.get.uggId(champ_name))

	url = "https://stats2.u.gg/lol/1.1/table/runes/{}/ranked_solo_5x5/{}/1.5.0.json".format(version,ID)
	rune_stats = ScrapJson(url)

	# Sur ce json format particulier à ugg : Server (1 à 12) -> Rang (1 à 15 sans le 9) -> Role (1 à 5)
		# Server : 1: NA, 2: EUW, 3: KOR, 4: EUNE, 5: BRASEIL, 6: LAS, 7: LAN, 8: OCE, 9: RUS, 10: TURQ, 11: JAP, 12: WORLD
		# Rang   : 1: Chall, 2: Master, 3:Diamant, 4:Plat, 5: gold, 6: silver, 7: bronze, 8: all ranks, 10: plat+, 11:dia+, 12: iron, 13:gm, 14:master+, 15:dia2+
		# Role   : 1: jungle, 2: supp, 3: adc, 4: top, 5: mid

	lane_corresp = {"1": "jungle", "2": "support", "3": "adc", "4": "top", "5": "middle"}
	lane_dic = rune_stats["12"]["8"]

	for lane_id,rune_list in lane_dic.items():
		lane_name = lane_corresp[lane_id]

		# i = 0 -> Keystone, i = 1 -> Primary, i = 2 -> Secondary
		for i,rune_dic in enumerate(rune_list):

			# Si Keystone on compte que c'est Primary aussi
			rune_type = "primary"
			if i == 2 :
				rune_type = "secondary"

			totalpick = sum([x[1] for x in rune_dic.values()])
			for riotID,val_list in rune_dic.items():

				win_number,pick_number = val_list
				winrate  = win_number/pick_number*100
				pickrate = pick_number/totalpick*100

				if __name__ == "__main__" :
					print("{} - {} : {:.2f}%, {:.2f}%".format(lane_name,riotID,winrate,pickrate))
				else :
					bdd.set.intermRune_Update(winrate,pickrate,champ_name,lane_name,riotID,rune_type)

if __name__ == "__main__" :
	# run("aatrox","11_23")
	init("11.23.2")