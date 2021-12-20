class Get():
	def __init__(self,bdd):
		self.cur = bdd.cur

	def numberOf(self,table):
		query = "SELECT COUNT(*) FROM {}".format(table)
		self.cur.execute(query)
		return self.cur.fetchone()[0]

	def champions(self):
		self.cur.execute("SELECT nom FROM Champion")
		res = self.cur.fetchall()
		res = [x[0] for x in res]
		res.sort()
		return(res)

	def items(self):
		self.cur.execute("SELECT nom FROM Item")
		res = self.cur.fetchall()
		res = [x[0] for x in res]
		res.sort()
		return res

	def lanes(self):
		self.cur.execute("SELECT nom FROM Lane")
		res = self.cur.fetchall()
		res = [x[0] for x in res]
		res.sort()
		return res

	def uggId(self,champ_name):
		Q_getId = """SELECT ID FROM Champion
					 WHERE nom = %s """
		self.cur.execute(Q_getId,(champ_name,))
		return self.cur.fetchone()[0]

	def summs(self,carte):
		self.cur.execute("SELECT nom FROM Spell WHERE {} = 1".format(carte))
		res = self.cur.fetchall()
		res = [x[0] for x in res]
		return res

	def summIcon(self,summoner_name):
		Q_getIcon = "SELECT img FROM Spell WHERE nom = %s"
		self.cur.execute(Q_getIcon,(summoner_name,))
		return self.cur.fetchone()[0]

	def championsFull(self):
		champion_list = self.champions()
		url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/{}.png"
		dic = [{"name":champion,"icon":url.format(self.uggId(champion))} for champion in champion_list]
		return dic