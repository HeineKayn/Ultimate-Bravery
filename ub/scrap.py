from scrapTools import * 
from bdd import BDD

class Scrapper():

	def __init__(self,bdd=None):
		self.bdd          = bdd
		self.cur_progress = 0
		self.max_progress = 1
		self.version      = tools.get_latest_version()

	def initInformations(self):
		scrapChampion.init(self.version,self.bdd)
		scrapLane.init(self.bdd)
		scrapItem.init(self.bdd)
		scrapRune.init(self.version,self.bdd)
		# scrapSummoners.init()
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

	def updateAll(self):
		self.max_progress = 2
		self.updateX(scrapLane.run,"Lane")
		self.cur_progress +=1 
		self.updateX(scrapSkill.run,"Skill")
		self.cur_progress +=1 
		tools.loadingBar(100,100,"Terminé","",self.cur_progress,self.max_progress)

		# updateBuild(bdd)
		# scrapRune.run(bdd)

	
scrapper = Scrapper(BDD())
# scrapper.updateX(scrapLane.run,"Lane")
# scrapper.updateX(scrapSkill.run,"Skill")
scrapper.updateX(scrapBuild.run,"Build")
# scrapper.updateAll()