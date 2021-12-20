class Set():
	def __init__(self,bdd):
		self.cur = bdd.cur

	##########  Ajout dans les tables d'infos 

	def addChampion(self,ugg_id,champ_name):
		Q_Champion = """INSERT INTO Champion (ID,nom) VALUES (%s,%s) 
						ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Champion,(ugg_id,champ_name))

	def addLane(self,lane_name):
		Q_Lane = """INSERT INTO Lane (nom) VALUES (%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Lane,(lane_name,))

	def addItem(self,item_name,item_type,item_img):
		Q_Item = """INSERT INTO Item (nom,type,img) VALUES (%s,%s,%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Item,(item_name,item_type,item_img))

	def addRune(self,rune_id,rune_name,rune_arbre,rune_ligne,rune_type,rune_img):
		Q_Rune = """INSERT INTO Rune (riotID,nom,arbre,ligne,type,img) VALUES (%s,%s,%s,%s,%s,%s)
					ON DUPLICATE KEY UPDATE nom=nom"""
		self.cur.execute(Q_Rune,(rune_id,rune_name,rune_arbre,rune_ligne,rune_type,rune_img))	

	def addSpell(self,spell_name,spell_classic,spell_aram,spell_img):
		Q_Champion = """INSERT INTO Spell (nom,classic,aram,img) VALUES (%s,%s,%s,%s) 
						ON DUPLICATE KEY UPDATE nom=nom,classic=classic,aram=aram, img=img"""
		self.cur.execute(Q_Champion,(spell_name,spell_classic,spell_aram,spell_img))

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

	def intermRune_Update(self,winrate,pickrate,champ_name,lane_name,rune_riotID,rune_type):
		Q_Rune_Update = """	INSERT INTO Interm_Rune (winrate, pickrate, championID, laneID, runeID) 
								VALUES (%s,%s,
									(SELECT ID FROM Champion WHERE nom = %s),
									(SELECT ID FROM Lane WHERE nom = %s),
									(SELECT ID FROM Rune WHERE riotID = %s and type = %s)) 
								ON DUPLICATE KEY UPDATE 
									winrate = VALUES(winrate), 
									pickrate = VALUES(pickrate), 
									championID = VALUES(championID), 
									LaneID = VALUES(LaneID), 
									RuneID = VALUES(RuneID)"""
		self.cur.execute(Q_Rune_Update,(winrate,pickrate,champ_name,lane_name,rune_riotID,rune_type))

	def intermSkillOrder_Update(self,champ_name,skill_order):
		Q_Skill_Update = """INSERT INTO SkillOrder (ordre, championID) 
							VALUES (%s,
								(SELECT ID FROM Champion WHERE nom = %s)) 
							ON DUPLICATE KEY UPDATE 
								ordre = VALUES(ordre), 
								championID = VALUES(championID)"""
		self.cur.execute(Q_Skill_Update,(skill_order,champ_name))