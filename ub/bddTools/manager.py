class Manage():
	def __init__(self,bdd):
		self.cur = bdd.cur

	def createTables(self):
		self.cur.execute("CREATE TABLE Item (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30), type VARCHAR(30), UNIQUE(nom))")
		self.cur.execute("CREATE TABLE Champion (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30), UNIQUE(nom))")
		self.cur.execute("CREATE TABLE Lane (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30), UNIQUE(nom))")
		self.cur.execute("CREATE TABLE Keystone (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30), genre VARCHAR(30), ligne VARCHAR(30), type VARCHAR(30), UNIQUE(nom,genre,ligne,type))")

		Q_SkillOrder_Create = """CREATE TABLE SkillOrder (
								 	ID int PRIMARY KEY AUTO_INCREMENT, 
									ordre VARCHAR(5), 
									championID int, 
									FOREIGN KEY(championID) REFERENCES Champion(ID), 
									UNIQUE (ordre,championID))"""
		self.cur.execute(Q_SkillOrder_Create)

		Q_IntermItem_Create = """CREATE TABLE Interm_Item (
									ID int PRIMARY KEY AUTO_INCREMENT, 
									winrate float(4),
									pickrate float(4), 
									championID int, 
									laneID int, 
									itemID int, 
									FOREIGN KEY(championID) REFERENCES Champion(ID), 
									FOREIGN KEY(laneID) REFERENCES Lane(ID), 
									FOREIGN KEY(itemID) REFERENCES Item(ID), 
									UNIQUE (winrate,pickrate,championID,laneID,itemID))"""
		self.cur.execute(Q_IntermItem_Create)

		Q_IntermKeystone_Create = """CREATE TABLE Interm_Keystone (
										ID int PRIMARY KEY AUTO_INCREMENT, 
										winrate float(4),
										pickrate float(4), 
										championID int, 
										laneID int, 
										keystoneID int, 
										FOREIGN KEY(championID) REFERENCES Champion(ID), 
										FOREIGN KEY(laneID) REFERENCES Lane(ID), 
										FOREIGN KEY(keystoneID) REFERENCES Keystone(ID), 
										UNIQUE (winrate,pickrate,championID,laneID,keystoneID))"""
		self.cur.execute(Q_IntermKeystone_Create)

		Q_IntermLane_Create = """CREATE TABLE Interm_Lane (
									ID int PRIMARY KEY AUTO_INCREMENT, 
									winrate float(4), 
									pickrate float(4), 
									championID int, 
									laneID int, 
									FOREIGN KEY(championID) REFERENCES Champion(ID), 
									FOREIGN KEY(laneID) REFERENCES Lane(ID), 
									UNIQUE(winrate,pickrate,championID,laneID))"""
		self.cur.execute(Q_IntermLane_Create)

	def destroyTable(self,Table):
		self.cur.execute("DROP TABLE {}".format(Table))

	def renewTables(self):
		self.destroyTable("Interm_Lane")
		self.destroyTable("Interm_Keystone")
		self.destroyTable("Interm_Item")
		self.destroyTable("SkillOrder")
		self.destroyTable("Lane")
		self.destroyTable("Champion")
		self.destroyTable("Item")
		self.destroyTable("Keystone")
		self.createTables()

	def clearTable(self,Table):
		self.cur.execute("TRUNCATE TABLE {}".format(Table))