from tools import * 

def run(cur=None):
	item_url = leagueFandom_url + '/wiki/Item_(League_of_Legends)'
	item_page_content = Scrap(item_url).find("div",{"id":"mw-content-text"})

	item_tables = item_page_content.findAll("div",{"class":"tlist"})
	item_table_dic = {"bottes":item_tables[4],"legendaires":item_tables[7],"mythiques":item_tables[8]}
	item_dic = {}

	for key,item_table in item_table_dic.items() :
		item_containers = item_table.findAll('img')
		item_list = []

		for item_container in item_containers :
			name = item_container["alt"]
			name = name.replace(" item.png","")
			icon = item_container["src"]

			name = complexItemResolver(name)
			if name == "" :
				break

			item_list += [name]
			# item_list += [{"name":name,"icon":icon}]

			# MODIFIER METTRE DANS UNE SEULE TABLE
			if cur :
				if key=="bottes":
					Q_Botte = "INSERT INTO Botte (nom) VALUES (%s)"
					cur.execute(Q_Botte,(name,))
				if key=="legendaires":
					Q_Item_Update = "INSERT INTO Interm_Item (winrate, pickrate, championID, laneID, itemID) VALUES (%s,%s,(SELECT ID FROM Champion WHERE nom = %s),(SELECT ID FROM Lane WHERE nom = %s),(SELECT ID FROM Item WHERE nom = %s)) ON DUPLICATE KEY UPDATE winrate = VALUES(winrate), pickrate = VALUES(pickrate), championID = VALUES(championID), LaneID = VALUES(LaneID), ItemID = VALUES(ItemID)"
					cur.execute(Q_Item_Update,(winrate,pickrate,champ_name,role,name))
				if key=="mythiques":
					pass

		item_dic[key] = item_list

	print(item_dic['legendaires'])

if __name__ == "__main__" :
	run()