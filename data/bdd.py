from manager import Manage
from setter import Set

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

	def get(self,request,args):
		return self.cur.execute(request,args)

	# def commit(self,func):
	# 	def wrap(*args, **kwargs):
	# 		result = func(*args, **kwargs)
	# 		self.conn.commit()
	# 		return result
	# 	return wrap

if __name__ == "__main__" :
	
	bdd = BDD()
	# bdd.manage.renewTables()

	# bdd.set.addChampion("Garen")
	# bdd.conn.commit()

	bdd.cur.execute("SELECT * FROM Champion")
	for x in bdd.cur :
		print(x)