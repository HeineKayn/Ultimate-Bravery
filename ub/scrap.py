from scrapTools import * 
from bdd import BDD

def initInformations(bdd=None):
	scrapChampion.init(bdd)
	scrapLane.init(bdd)
	scrapItem.init(bdd)
	# scrapRune.init(bdd)
	bdd.commit()

def updateAll(bdd=None):
	champions  = bdd.get.champions()
	nbChampion = len(champions)
	nbLane 	   = 5

	counter = 0
	for champion in champions :
		tools.loadingBar(counter,nbChampion,"Lanes : {}".format(champion.capitalize()),"1/4")
		scrapLane.run(champion,bdd)
		counter += 1
		break

	# scrapBuild.run(bdd)
	# scrapSkill.run(bdd)
	# scrapRune.run(bdd)

bdd = BDD()
# initInformations(bdd)
updateAll(bdd)
