from pickTools import * 
from bdd import BDD

class Picker():

	def __init__(self,bdd=None):
		self.bdd = bdd

	def run(difficulte,carte,champ_allowed):
	    dic = {}
	    dic["titre"] = pickTitre.run()

	    dic["champion_name"] = pickChampion.run([],bdd)
	    champ_name           = dic["champion_name"]["name"]

	    dic["lane"] = pickLane.run(difficulte,carte,champ_name,bdd)
	    lane        = dic["lane"]

	    dic["ordre"] = pickSkill.run(difficulte,champ_name,bdd)

	    # dic["item"]  = Pick_Item(difficulte, carte, lane, champ_name) 
	    # dic["item"] += Pick_Botte(difficulte, carte, lane, champ_name)
	    # dic["summ"]  = Pick_Summoners(difficulte, lane, carte)
	    # dic["rune"]  = Pick_Rune(difficulte, lane, champ_name)

	    return dic


bdd = BDD()
picker = Picker(bdd)

x = pickTitre.run()
x = pickChampion.run([],bdd)
x = pickLane.run(1,"classic","vi",bdd)
x = pickSkill.run(1,"vi",bdd)


print(x)