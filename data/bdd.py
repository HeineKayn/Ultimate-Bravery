from setter import Set
from getter import Get

from dotenv import load_dotenv
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

	except mariadb.Error as e:
		print(f"Error connecting to MariaDB Platform: {e}")
		sys.exit(1)

	self.cur = conn.cursor()
	self.get = Get(cur)
	self.set = Set(cur)