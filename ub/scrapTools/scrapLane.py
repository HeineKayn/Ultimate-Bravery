from .tools import * 

def init(bdd=None):
	lanes = ["top","jungle","middle","adc","support"]
	for lane_name in lanes:
		if bdd : 
			bdd.set.addLane(lane_name)
	return lanes

def run(champ_name,bdd=None):
	champ_lane_url = "https://www.leagueofgraphs.com/fr/champions/stats/" + champ_name

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

			if bdd : 
				bdd.set.intermLane_Update(winrate,pickrate,champ_name,name)

			if __name__ == "__main__" :
				print(name, pickrate, winrate)
			
		except :
			pass