from tools import * 

def run(cur=None):
	item_url = leagueFandom_url + '/wiki/Item_(League_of_Legends)'
	item_page_content = Scrap(item_url).find("div",{"id":"mw-content-text"})

	item_tables = item_page_content.findAll("div",{"class":"tlist"})
	item_table_dic = {"legendaires":item_tables[7],"mythiques":item_tables[8],"bottes":item_tables[4]}
	item_dic = {}

	for key,item_table in item_table_dic.items() :
		item_containers = item_table.findAll('img')
		item_list = []

		for item_container in item_containers :
			name = item_container["alt"]
			name = name.replace(" item.png","")
			icon = item_container["src"]

			item_list += [{"name":name,"icon":icon}]

		item_dic[key] = item_list
		
	print(item_dic['bottes'])

if __name__ == "__main__" :
	run()