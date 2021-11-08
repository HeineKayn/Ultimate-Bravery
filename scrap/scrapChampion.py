from tools import * 

def run(cur=None):
	base_url = leagueOfGraphs_url
	list_url_full = base_url + "/fr/champions/builds"

	champ_table = Scrap(list_url_full).find("table",{"class":"data_table with_sortable_column"})
	champ_list  = champ_table.findAll("tr") # Récolte toutes les balises contentant les noms de champion

	champ_list = champ_list[1:]
	champ_name_list = []

	for champ in champ_list :

		# Try catch parce que des fois balises de séparation (plus facile comme ça)
		try :
			champ_url = champ.a["href"]
			if champ_url != "/fr/champions/builds/by-champion-name" :
				champ_name = champ_url[21:]
				champ_name_list.append(champ_name)

				# Si on a donné le curseur de la BDD c'est qu'on veut rajouter à la BDD 
				if cur : 
					cur.execute("INSERT INTO Champion (nom) VALUES (%s)",(champ_name,))

		except : 
			pass

	return champ_name_list

if __name__ == "__main__" :
	res = run()
	res.sort()

	# putJson(championFile,res)
	print(len(res),res)