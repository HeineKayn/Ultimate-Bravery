

############# Tables UB
##############################
#############################################

cur.execute("CREATE TABLE Item (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30))")
cur.execute("CREATE TABLE Champion (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30))")
cur.execute("CREATE TABLE Botte (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30))")
cur.execute("CREATE TABLE Lane (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30))")

cur.execute("CREATE TABLE Keystone (ID int PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(30), genre VARCHAR(30), ligne VARCHAR(30), type VARCHAR(30))")
cur.execute("CREATE TABLE SkillOrder (ID int PRIMARY KEY AUTO_INCREMENT, ordre VARCHAR(5), championID int, FOREIGN KEY(championID) REFERENCES Champion(ID))")

cur.execute("CREATE TABLE Interm_Item (ID int PRIMARY KEY AUTO_INCREMENT, winrate float(4), pickrate float(4), championID int, laneID int, itemID int, FOREIGN KEY(championID) REFERENCES Champion(ID), FOREIGN KEY(laneID) REFERENCES Lane(ID), FOREIGN KEY(itemID) REFERENCES Item(ID))")
cur.execute("CREATE TABLE Interm_Botte (ID int PRIMARY KEY AUTO_INCREMENT, winrate float(4), pickrate float(4), championID int, laneID int, botteID int, FOREIGN KEY(championID) REFERENCES Champion(ID), FOREIGN KEY(laneID) REFERENCES Lane(ID), FOREIGN KEY(botteID) REFERENCES Botte(ID))")
cur.execute("CREATE TABLE Interm_Keystone (ID int PRIMARY KEY AUTO_INCREMENT, winrate float(4), pickrate float(4), championID int, laneID int, keystoneID int, FOREIGN KEY(championID) REFERENCES Champion(ID), FOREIGN KEY(laneID) REFERENCES Lane(ID), FOREIGN KEY(keystoneID) REFERENCES Keystone(ID))")
cur.execute("CREATE TABLE Interm_Lane (ID int PRIMARY KEY AUTO_INCREMENT, winrate float(4), pickrate float(4), championID int, laneID int, FOREIGN KEY(championID) REFERENCES Champion(ID), FOREIGN KEY(laneID) REFERENCES Lane(ID))")

############### Contraintes d'indépendance

cur.execute("ALTER TABLE Item ADD CONSTRAINT unique_combi UNIQUE (nom)")
cur.execute("ALTER TABLE Botte ADD CONSTRAINT unique_combi UNIQUE (nom)")
cur.execute("ALTER TABLE Champion ADD CONSTRAINT unique_combi UNIQUE (nom)")
cur.execute("ALTER TABLE Lane ADD CONSTRAINT unique_combi UNIQUE (nom)")

cur.execute("ALTER TABLE Keystone ADD CONSTRAINT unique_combi UNIQUE (nom,genre,ligne,type)")
cur.execute("ALTER TABLE SkillOrder ADD CONSTRAINT unique_combi UNIQUE (ordre,championID)")

cur.execute("ALTER TABLE Interm_Item ADD CONSTRAINT unique_combi UNIQUE (winrate,pickrate,championID,laneID,itemID)")
cur.execute("ALTER TABLE Interm_Botte ADD CONSTRAINT unique_combi UNIQUE (winrate,pickrate,championID,laneID,botteID)")
cur.execute("ALTER TABLE Interm_Keystone ADD CONSTRAINT unique_combi UNIQUE (winrate,pickrate,championID,laneID,keystoneID)")
cur.execute("ALTER TABLE Interm_Lane ADD CONSTRAINT unique_combi UNIQUE (winrate,pickrate,championID,laneID)")

############################################################
############################################################
############################################################

# cur.execute("CREATE TABLE Lane (ID int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30))")
# cur.execute("CREATE TABLE Interm_Lane (ID int PRIMARY KEY AUTO_INCREMENT, winrate int, pickrate int, championID int, laneID int, FOREIGN KEY(championID) REFERENCES Champion(ID), FOREIGN KEY(laneID) REFERENCES Lane(ID))")
# cur.execute("CREATE TABLE Test (name VARCHAR(30), created datetime, gender ENUM('M', 'F', 'O'))")

#######################

# lane_list = ["Top","Jungle","Mid","ADC","Supp"]

# for lane in lane_list :
# 	cur.execute("INSERT INTO Lane (name) VALUES ({})".format(lane))

# conn.commit()

#######################

users = ["Thomas","Manon","Paul"]
user_scores = [(45,100),(30,200),(46,124)]

Q1 = "CREATE TABLE Users (id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50))"
Q2 = "CREATE TABLE Scores (userID int PRIMARY KEY, FOREIGN KEY (userID) REFERENCES Users(id), game1 int DEFAULT 0, game2 int DEFAULT 0)"

Q3 = "INSERT INTO Users (name) VALUES (%s)"
Q4 = "INSERT INTO Scores (userID,game1,game2) VALUES (%s,%s,%s)"

for x, user in enumerate(users) :
	cur.execute(Q3,(user,))
	last_id = cur.lastrowid
	cur.execute(Q4,(last_id,) + user_scores[x]) # (last_id,score_1,score_2)

cur.execute("SELECT table_name FROM information_schema.tables") # Montre toutes les tables

#######################

# cur.execute("ALTER TABLE Lane ADD COLUMN test VARCHAR(50) NOT NULL")   # AJOUTE colonne
# cur.execute("ALTER TABLE Lane DROP test ")							 # Supp colonne
# cur.execute("ALTER TABLE Lane CHANGE test truc VARCHAR(50) NOT NULL ") # change la colonne

#######################

cur.execute("SELECT * FROM Lane WHERE name = 'ADC'")   # Que l'element qui s'appelle ADC
cur.execute("SELECT laneID FROM Lane")                 # Juste les ID
cur.execute("SELECT * FROM Lane ORDER BY laneID DESC") # Trié dans l'ordre descendant

#######################

cur.execute("DESCRIBE Lane") # Montre les colonnes de la table Lane
cur.execute("SELECT * FROM Lane") # Montre les éléments dans la table Lane

for x in cur :
	print(x)

####################### 

# Fais en sorte qu'il puisse pas y avoir 2x (même ordre ET même championID)
cur.execute("ALTER TABLE SkillOrder ADD CONSTRAINT unique_combi UNIQUE (ordre, championID)")

# Ajoute l'id du champion (en donnant le nom) et l'ordre seulement si pas déjà présent, sinon modifie
Q_Skill = "INSERT INTO SkillOrder (ordre, championID) VALUES (%s,(SELECT ID FROM Champion WHERE nom = %s)) ON DUPLICATE KEY UPDATE ordre = VALUES(ordre), championID = VALUES(championID)"
