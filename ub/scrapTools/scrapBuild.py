from .tools import * 

def run(champ_name,lane,existing_items,bdd=None):

	champ_build_url = "https://www.leagueofgraphs.com/en/champions/items/{}/{}".format(champ_name,lane)
	champ_build_page_content = Scrap(champ_build_url).find("div",{"id":"mainContentContainer"})

	#---  POUR LES MYTHIQUES / LEGENDAIRES
	champ_build_table = champ_build_page_content.findAll("div",{"class":"box box-padding-10"})[-3]
	item_list = champ_build_table.findAll("tr")[1:]
	item_processed = []

	for item in item_list :

		try : 
			bars = item.findAll("progressbar")

			pickrate = float(bars[0]["data-value"]) * 100
			winrate = float(bars[1]["data-value"]) * 100
			name = item.td.img["alt"]
			icon = item.td.img["src"]

			name = complexItemResolver(name)
			if name != "" :

				# Pour pas ajouter 2x items fusionnés et que second (moins bon) écrase le premier
				if name not in item_processed :
					item_processed.append(name)
					
					if __name__ == "__main__" :
						print(name, pickrate, winrate)

					if bdd :
						bdd.set.intermItem_Update(winrate,pickrate,champ_name,lane,name)

		except : 
			pass

	#--- POUR LES BOTTES
	champ_botte_table = champ_build_page_content.findAll("div",{"class":"box box-padding-10"})[-4]
	botte_list = champ_botte_table.findAll("tr")[1:]

	for botte in botte_list :

		try : 
			bars = botte.findAll("progressbar")

			pickrate = float(bars[0]["data-value"]) * 100
			winrate = float(bars[1]["data-value"]) * 100
			name = botte.td.img["alt"]
			icon = botte.td.img["src"]

			name = complexItemResolver(name)
			if name != "" :

				# Pour pas ajouter 2x items fusionnés et que second (moins bon) écrase le premier
				if name not in item_processed :
					item_processed.append(name)
					
					if __name__ == "__main__" :
						print(name, pickrate, winrate)

					if bdd :
						bdd.set.intermItem_Update(winrate,pickrate,champ_name,lane,name)

		except : 
			pass

	# Si il y'a des items existant sur lesquels on a pas d'info, on met leurs stats à 0
	forgotten_item_list = [x for x in existing_items if x not in item_processed]
	for name in forgotten_item_list : 
		pickrate = 0.0
		winrate = 0.0

		if __name__ == "__main__" :
			print("forgotten :",name)

		if bdd :
			bdd.set.intermItem_Update(winrate,pickrate,champ_name,lane,name)

if __name__ == "__main__" :
	test_champ_name = "vi"
	test_lane = "jungle"

	items  = ["Berserker's greaves", "Mercury's treads", 'Plated steelcaps', "Sorcerer's shoes", 'Abyssal mask', "Anathema's chains", 'Mana', 'Ardent censer', 'Axiom arc', "Banshee's veil", 'Black cleaver', 'Support', 'Blade of the ruined king', 'Bloodthirster', 'Chempunk chainsword', 'Chemtech putrifier', 'Cosmic drive', "Dead man's plate", "Death's dance", 'Demonic embrace', 'Edge of night', 'Essence reaver', 'Fimbulwinter', 'Force of nature', 'Frozen heart', 'Gargoyle stoneplate', 'Guardian angel', 'Crit', 'Horizon focus', 'Hullbreaker', "Knight's vow", 'Lich bane', 'Whisper', 'Lifeline', "Mejai's soulstealer", 'Quicksilver', "Mikael's blessing", 'Morellonomicon', "Nashor's tooth", 'Navori quickblades', 'Phantom dancer', "Rabadon's deathcap", "Randuin's omen", 'Rapid firecannon', 'Hydra', 'Redemption', "Rylai's crystal scepter", "Serpent's fang", "Serylda's grudge", 'Shadowflame', 'Spirit visage', 'Staff of flowing water', 'Stormrazor', 'The collector', 'Thornmail', 'Umbral glaive', 'Vigilant wardstone', 'Void staff', "Warmog's armor", "Winter's approach", "Wit's end", "Youmuu's ghostblade", "Zeke's convergence", "Zhonya's hourglass", 'Crown of the shattered queen', 'Divine sunderer', 'Duskblade of draktharr', 'Eclipse', 'Evenshroud', 'Everfrost', 'Frostfire gauntlet', 'Galeforce', 'Goredrinker', 'Hextech rocketbelt', 'Imperial mandate', 'Kraken slayer', "Liandry's anguish", 'Locket of the iron solari', "Luden's tempest", 'Moonstone renewer', 'Night harvester', "Prowler's claw", 'Riftmaker', "Shurelya's battlesong", 'Stridebreaker', 'Sunfire aegis', 'Trinity force', 'Turbo chemtank']
	run(test_champ_name,test_lane,items)