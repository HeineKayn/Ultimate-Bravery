class Set():
	def __init__(self,bdd):
		self.cur = bdd.cur

	##########  Ajout dans les tables d'infos 

	def addChampion(self,champ_name):
		Q_Champion = """INSERT INTO Champion (nom) VALUES (%s) 
						ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Champion,(champ_name,))

	def addLane(self,lane_name):
		Q_Lane = """INSERT INTO Lane (nom) VALUES (%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Lane,(lane_name,))

	def addItem(self,item_name,item_type):
		Q_Item = """INSERT INTO Item (nom,type) VALUES (%s,%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Item,(item_name,item_type))

	def addKeystone(self,rune_name,rune_genre,rune_type,numero):
		Q_Rune = """INSERT INTO Keystone (nom,genre,ligne,type) VALUES (%s,%s,%s,%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Rune,(rune_name,rune_genre,rune_type,numero))	

	##########  Update dans les tables d'intermédiaire

	def intermLane_Update(self,winrate,pickrate,champ_name,lane_name):
		Q_Lane_Update = """ INSERT INTO Interm_Lane (winrate, pickrate, championID, laneID) 
							VALUES (%s,%s,
								(SELECT ID FROM Champion WHERE nom = %s),
								(SELECT ID FROM Lane WHERE nom = %s)) 
							ON DUPLICATE KEY UPDATE 
								winrate = VALUES(winrate), 
								pickrate = VALUES(pickrate), 
								championID = VALUES(championID), 
								LaneID = VALUES(LaneID)"""
		self.cur.execute(Q_Lane_Update,(winrate,pickrate,champ_name,lane_name))

	def intermItem_Update(self,winrate,pickrate,champ_name,lane_name,item_name):
		Q_Item_Update = """ INSERT INTO Interm_Item (winrate, pickrate,championID, laneID, itemID) 
							VALUES (%s,%s,
								(SELECT ID FROM Champion WHERE nom = %s),
								(SELECT ID FROM Lane WHERE nom = %s),
								(SELECT ID FROM Item WHERE nom = %s)) 
							ON DUPLICATE KEY UPDATE 
								winrate = VALUES(winrate), 
								pickrate = VALUES(pickrate), 
								championID = VALUES(championID), 
								LaneID = VALUES(LaneID), 
								ItemID = VALUES(ItemID)"""
		self.cur.execute(Q_Item_Update,(winrate,pickrate,champ_name,lane_name,item_name))

	def intermKeystone_Update(self,winrate,pickrate,champ_name,lane_name,keystone_name,numero):
		Q_Keystone_Update = """	INSERT INTO Interm_Keystone (winrate, pickrate, championID, laneID, keystoneID) 
								VALUES (%s,%s,
									(SELECT ID FROM Champion WHERE nom = %s),
									(SELECT ID FROM Lane WHERE nom = %s),
									(SELECT ID FROM Keystone WHERE nom = %s and ligne = %s)) 
								ON DUPLICATE KEY UPDATE 
									winrate = VALUES(winrate), 
									pickrate = VALUES(pickrate), 
									championID = VALUES(championID), 
									LaneID = VALUES(LaneID), 
									KeystoneID = VALUES(KeystoneID)"""
		self.cur.execute(Q_Keystone_Update,(winrate,pickrate,champ_name,lane_name,keystone_name,numero))

	def intermSkillOrder_Update(self,champ_name,spell_order):
		Q_Skill_Update = """INSERT INTO SkillOrder (ordre, championID) 
							VALUES (%s,
								(SELECT ID FROM Champion WHERE nom = %s)) 
							ON DUPLICATE KEY UPDATE 
								ordre = VALUES(ordre), 
								championID = VALUES(championID)"""
		self.cur.execute(Q_Skill_Update,(spell_order,champ_name))