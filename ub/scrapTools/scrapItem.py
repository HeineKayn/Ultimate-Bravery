from .tools import * 

def init(bdd=None):
	item_url = leagueFandom_url + '/wiki/Item_(League_of_Legends)'
	item_page_content = Scrap(item_url).find("div",{"id":"mw-content-text"})

	item_tables = item_page_content.findAll("div",{"class":"tlist"})
	item_table_dic = {"bottes":item_tables[4],"legendaires":item_tables[7],"mythiques":item_tables[8]}
	item_list = []

	for key,item_table in item_table_dic.items() :
		item_containers = item_table.findAll('img')

		for item_container in item_containers :
			name = item_container["alt"]
			name = name.replace(" item.png","")
			icon = item_container["src"]

			name = complexItemResolver(name)
			if name == "" :
				break

			item_list.append(name)

			if bdd :
				bdd.set.addItem(name,key)

	return item_list

if __name__ == "__main__" :
	res = run()
	res.sort()
	print(res)