if __name__ == '__main__' :
	from bddTools import *
else :
	from .bddTools import *

from dotenv import load_dotenv
import os 

import mariadb

class BDD():

	def __init__(self):

		load_dotenv()
		user = os.getenv('DB_User')
		password = os.getenv('DB_Password')
		host = os.getenv('DB_Host')
		port = int(os.getenv('DB_Port'))

		try:
			conn = mariadb.connect(
				user=user,
				password=password,
				host=host,
		  		port=port,
		  		database="ub"
			)
			print("Connecté à la BDD de {} sur le port {}".format(host,port))

		except mariadb.Error as e:
			print(f"Error connecting to MariaDB Platform: {e}")
			exit()

		self.conn = conn
		self.cur = conn.cursor()
		self.manage = Manage(self)
		self.set = Set(self)
		self.get = Get(self)

	def request(self,req,args):
		return self.cur.execute(req,args)

	def commit(self):
		self.conn.commit()

if __name__ == "__main__" :
	
	bdd = BDD()
	
	# bdd.manage.renewTables()
	# bdd.manage.createTables()

	# bdd.manage.destroyTable("Lane")
	# bdd.manage.destroyTable("Champion")
	# bdd.manage.destroyTable("Item")
	# bdd.manage.destroyTable("Interm_Rune")
	# bdd.manage.destroyTable("Rune")

	bdd.cur.execute("SHOW TABLES")
	# bdd.cur.execute("SELECT * FROM Item WHERE nom LIKE '%Mejai%'")
	for x in bdd.cur :
		print(x)