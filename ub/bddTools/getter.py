class Get():
	def __init__(self,bdd):
		self.cur = bdd.cur

	def numberOf(self,table):
		query = "SELECT COUNT(*) FROM {}".format(table)
		self.cur.execute(query)
		res = self.cur.fetchone()[0]
		return(res)

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
		return(res)

	def lanes(self):
		self.cur.execute("SELECT nom FROM Lane")
		res = self.cur.fetchall()
		res = [x[0] for x in res]
		res.sort()
		return(res)