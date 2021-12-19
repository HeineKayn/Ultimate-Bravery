from scrapTools import * 
from bdd import BDD

class Scrapper():

	def __init__(self,bdd=None):
		self.bdd          = bdd
		self.cur_progress = 0
		self.max_progress = 1
		self.version      = tools.get_latest_version()
		self.uggversion   = tools.uggversion(self.version)

	def initInformations(self):
		i=0
		tools.loadingBar(i,5,"Champion")
		scrapChampion.init(self.version,self.bdd)
		i += 1
		tools.loadingBar(i,5,"Lane")
		scrapLane.init(self.bdd)
		i += 1
		tools.loadingBar(i,5,"Item")
		scrapItem.init(self.bdd)
		i += 1
		tools.loadingBar(i,5,"Rune")
		scrapRune.init(self.version,self.bdd)
		i += 1
		tools.loadingBar(i,5,"Summoners")
		scrapSummoners.init(self.version,self.bdd)
		i += 1
		tools.loadingBar(i,5,"Terminé")
		self.bdd.commit()

	def updateX(self,scrapFunc,task):
		champions  = self.bdd.get.champions()
		items      = self.bdd.get.items()
		lanes      = self.bdd.get.lanes()
		nbChampion = len(champions)

		counter = 0
		for champion in champions :

			tools.loadingBar(counter,nbChampion,task,champion,self.cur_progress, self.max_progress)
			lane_counter = 0

			for lane in lanes:

				# Certains scrappers n'ont pas besoin de faire sur chaque lane
				# On met tout dans une même fonction pour éviter d'en avoir plein qui se ressemblent
				if task in ["Lane","Skill"] :
					scrapFunc(champion,self.bdd)
					break
				# Rune aussi est un peu différent car on lui donne la version
				elif task == "Rune" : 
					scrapFunc(champion,self.uggversion,self.bdd)
					break

				# Build est différent car on doit lui passer un argument supplémentaire
				else :
					tools.laneLoadingBar(lane)
					if task == "Build" :
						scrapFunc(champion,lane,items,self.bdd)
					else :
						pass
				lane_counter += 1

			counter += 1
			self.bdd.commit()
		tools.loadingBar(counter,nbChampion,task,"Terminé",self.cur_progress, self.max_progress)

	def updateAll(self):
		self.max_progress = 4
		self.updateX(scrapLane.run,"Lane")
		self.cur_progress +=1 
		self.updateX(scrapSkill.run,"Skill")
		self.cur_progress +=1 
		self.updateX(scrapBuild.run,"Build")
		self.cur_progress +=1 
		self.updateX(scrapRune.run,"Rune")
		self.cur_progress +=1 
		tools.loadingBar(100,100,"Terminé","",self.cur_progress,self.max_progress)

if __name__ == "__main__" :
	scrapper = Scrapper(BDD())
	scrapper.initInformations()
	scrapper.updateAll()

	# scrapRune.init(scrapper.version,scrapper.bdd)
	# scrapper.updateX(scrapRune.run,"Rune")
	# scrapper.bdd.commit()
