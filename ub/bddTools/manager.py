class Manage():
	def __init__(self,bdd):
		self.cur = bdd.cur

	def createTables(self):

		# ----- INFOS

		self.cur.execute("""CREATE TABLE Champion (
								ID int PRIMARY KEY, 
								nom VARCHAR(30),
							UNIQUE(nom))""")

		self.cur.execute("""CREATE TABLE Lane (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								nom VARCHAR(30), 
							UNIQUE(nom))""")

		self.cur.execute("""CREATE TABLE Item (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								nom VARCHAR(40), 
								type VARCHAR(30),
								img VARCHAR(130), 
							UNIQUE(nom))""")

		self.cur.execute("""CREATE TABLE Rune (
								ID int PRIMARY KEY AUTO_INCREMENT,
								riotID INT,
								nom VARCHAR(30), 
								arbre VARCHAR(30), 
								ligne VARCHAR(30), 
								type VARCHAR(30), 
								img VARCHAR(100),
							UNIQUE(nom,ligne,type))""")

		self.cur.execute("""CREATE TABLE Spell (
								ID int PRIMARY KEY AUTO_INCREMENT,
								nom VARCHAR(30),
								classic INT(1),
								aram INT(1),
								img VARCHAR(45),
							UNIQUE(nom,img))""")

		# ----- INTERMEDIAIRES

		self.cur.execute("""CREATE TABLE SkillOrder (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								ordre VARCHAR(5), 
								championID int, 
							FOREIGN KEY(championID) REFERENCES Champion(ID), 
							UNIQUE (ordre,championID))""")

		self.cur.execute("""CREATE TABLE Interm_Item (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								winrate float(4),
								pickrate float(4), 
								championID int, 
								laneID int, 
								itemID int, 
							FOREIGN KEY(championID) REFERENCES Champion(ID), 
							FOREIGN KEY(laneID) REFERENCES Lane(ID), 
							FOREIGN KEY(itemID) REFERENCES Item(ID), 
							UNIQUE (winrate,pickrate,championID,laneID,itemID))""")

		self.cur.execute("""CREATE TABLE Interm_Rune (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								winrate float(4) DEFAULT 0.0,
								pickrate float(4) DEFAULT 0.0, 
								championID int, 
								laneID int, 
								runeID int, 
							FOREIGN KEY(championID) REFERENCES Champion(ID), 
							FOREIGN KEY(laneID) REFERENCES Lane(ID), 
							FOREIGN KEY(runeID) REFERENCES Rune(ID), 
							UNIQUE (winrate,pickrate,championID,laneID,runeID))""")

		self.cur.execute("""CREATE TABLE Interm_Lane (
								ID int PRIMARY KEY AUTO_INCREMENT, 
								winrate float(4), 
								pickrate float(4), 
								championID int, 
								laneID int, 
							FOREIGN KEY(championID) REFERENCES Champion(ID), 
							FOREIGN KEY(laneID) REFERENCES Lane(ID), 
							UNIQUE(winrate,pickrate,championID,laneID))""")

	def destroyTable(self,Table):
		self.cur.execute("DROP TABLE {}".format(Table))

	def destroyAllTable(self):
		self.destroyTable("Interm_Lane")
		self.destroyTable("Interm_Rune")
		self.destroyTable("Interm_Item")
		self.destroyTable("SkillOrder")
		self.destroyTable("Lane")
		self.destroyTable("Champion")
		self.destroyTable("Item")
		self.destroyTable("Rune")
		self.destroyTable("Spell")

	def renewTables(self):
		self.destroyAllTable()
		self.createTables()

	def clearTable(self,Table):
		self.cur.execute("TRUNCATE TABLE {}".format(Table))