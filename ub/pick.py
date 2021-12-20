from .pickTools import * 
from .bdd import BDD

class Picker():

	def __init__(self,bdd):
		self.bdd = bdd

	def run(self,difficulte,carte,champion_notowned):
	    dic = {}
	    dic["titre"] = pickTitre.run()

	    dic["champion"] = pickChampion.run(champion_notowned,self.bdd)
	    champ_name      = dic["champion"]["name"]

	    dic["lane"] = pickLane.run(difficulte,carte,champ_name,self.bdd)
	    lane        = dic["lane"]["name"]

	    dic["spell"] = pickSpell.run(difficulte,carte,self.bdd)
	    dic["ordre"] = pickSkill.run(difficulte,champ_name,self.bdd)
	    dic["rune"]  = pickRune.RunePicker(difficulte, champ_name, lane, self.bdd).run()
	    dic["item"]  = pickBuild.BuildPicker(difficulte, champ_name, lane, carte, self.bdd).run() 

	    return dic


if __name__ == "__main__" :
	bdd = BDD()
	picker = Picker(bdd)

	x = picker.run(1,"classic",[])
	for key,val in x.items() :
		print(key," : ", val)