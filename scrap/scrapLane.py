from tools import * 

def run(champ_name,cur=None):

	champ_lane_url = leagueOfGraphs_url + "/fr/champions/stats/" + champ_name

	champ_lane_page_content = Scrap(champ_lane_url).find("div",{"id":"mainContent"})
	champ_lane_table = champ_lane_page_content.findAll("div",{"class":"medium-12 small-24 columns"})[1]
	champ_lane_list = champ_lane_table.findAll('tr') # Récolte la balise contenant les 5 lanes et leur winrate


	for lane in champ_lane_list[1:] : 

		try :
			bars = lane.findAll("progressbar")

			pickrate = float(bars[0]["data-value"]) * 100
			winrate = float(bars[1]["data-value"]) * 100
			name = lane.td.img["alt"]

			# Pour des soucis de cohérence dans le programme
			if name == "Jungler" : 
				name = "Jungle"
			elif name == "Mid" : 
				name = "Middle"

			if cur : 
				Q_Lane_Update = "INSERT INTO Interm_Lane (winrate, pickrate, championID, laneID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID)"
				cur.execute(Q_Lane_Update,(winrate,pickrate,champ_name,name))

			if __name__ == "__main__" :
				print(name, pickrate, winrate)
			
		except :
			pass

if __name__ == "__main__" :
	test_champ_name = "aatrox"
	run(test_champ_name)