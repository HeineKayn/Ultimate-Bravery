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
		self.cur.execute("SELECT nom,img FROM Spell WHERE {} = 1".format(carte))
		res = self.cur.fetchall()
		res = [{x[0]:x[1]} for x in res]
		return res