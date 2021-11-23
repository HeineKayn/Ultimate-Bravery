from pickTools import * 
from bdd import BDD

class Picker():

	def __init__(self,bdd=None):
		self.bdd = bdd

	def run(difficulte,carte,champ_allowed):
	    dic = {}
	    dic["titre"] = pickTitre.run()

	    dic["champion_name"] = pickChampion.run([],self.bdd)
	    champ_name           = dic["champion_name"]["name"]

	    dic["lane"] = pickLane.run(difficulte,carte,champ_name,self.bdd)
	    lane        = dic["lane"]

	    dic["spell"] = pickSpell.run(difficulte,carte,self.bdd)
	    dic["ordre"] = pickSkill.run(difficulte,champ_name,self.bdd)

	    # dic["item"]  = Pick_Item(difficulte, carte, lane, champ_name) 
	    # dic["item"] += Pick_Botte(difficulte, carte, lane, champ_name)
	    # dic["rune"]  = Pick_Rune(difficulte, lane, champ_name)

	    return dic


bdd = BDD()
picker = Picker(bdd)

x = pickTitre.run()
x = pickChampion.run([],bdd)
x = pickSpell.run(5,"classic",bdd)
x = pickSkill.run(1,"vi",bdd)

# x = pickLane.run(1,"classic","vi",bdd)



print(x)