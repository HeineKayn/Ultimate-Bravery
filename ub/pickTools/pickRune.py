import random

class RunePicker():

    def __init__(self,difficulte,champ,lane,bdd):
        self.difficulte = difficulte
        self.champ = champ
        self.lane = lane
        self.bdd = bdd

        self.difficultyTranslater()
        self.runeDic = {}

    def run(self):
        self.pickKeystone()
        self.pickPrimaire()
        self.pickSecondary()
        return self.runeDic

    def getRuneIcon(self,rune_icon):
        url = "https://ddragon.leagueoflegends.com/cdn/img/"
        return url + rune_icon

    def difficultyTranslater(self):

        # Diff 1 ou 2 : Meilleure Keystone
        if self.difficulte < 3 :     
            self.ordo = 'pickrate DESC'

        # Diff 3 : Keystone au hasard    
        elif self.difficulte == 3 : 
            self.ordo = 'RAND ()'

        # Diff 4 ou 5 : Pire Keystone
        else :                  
            self.ordo = 'pickrate ASC' 

    def pickKeystone(self):

        Q_Keystone = """
                        SELECT nom,arbre,img
                        FROM Interm_Rune
                        INNER JOIN Rune
                        ON Rune.id = Interm_Rune.runeID 
                            AND Rune.type = 'primary'
                            AND Rune.ligne = '0'
                        WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                            AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                        ORDER BY {}
                        LIMIT 1
                    """

        Q_Keystone = Q_Keystone.format(self.ordo)
        self.bdd.cur.execute(Q_Keystone,(self.champ,self.lane,))
        keystone = self.bdd.cur.fetchone()
        
        self.primary_tree = keystone[1]
        self.runeDic["Keystone"] = {"name" : keystone[0], "icon" : self.getRuneIcon(keystone[2])} 

    def pickPrimaire(self):

        Q_Primaire = """
                    SELECT nom,img
                    FROM Interm_Rune
                    INNER JOIN Rune
                    ON Rune.id = Interm_Rune.runeID 
                        AND Rune.type = 'primary'
                        AND Rune.arbre = %s AND Rune.ligne = %s
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                        AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    ORDER BY {}
                    LIMIT 1
                """

        self.runeDic["Primary"] = []
        Q_Primaire = Q_Primaire.format(self.ordo)

        for numero in ['1','2','3'] : 
            self.bdd.cur.execute(Q_Primaire,(self.primary_tree,numero,self.champ,self.lane,))
            rune = self.bdd.cur.fetchone()
            self.runeDic["Primary"].append({"name" : rune[0], "icon" : self.getRuneIcon(rune[1])})

    def pickSecondary(self):

        Q_Secondaire1 = """
                    SELECT nom,arbre,ligne,img
                    FROM Interm_Rune
                    INNER JOIN Rune
                    ON Rune.id = Interm_Rune.runeID 
                        AND Rune.type = 'secondary'
                        AND Rune.arbre != %s
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                        AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    ORDER BY {}
                    LIMIT 1
                """

        self.runeDic["Secondary"] = []
        Q_Secondaire1 = Q_Secondaire1.format(self.ordo)

        # Première rune secondaire
        self.bdd.cur.execute(Q_Secondaire1,(self.primary_tree,self.champ,self.lane,))
        rune, secondaryTree, ligne, rune_icon = self.bdd.cur.fetchone()
        self.runeDic["Secondary"].append({"name" : rune, "icon" : self.getRuneIcon(rune_icon)})

        # Deuxieme rune secondaire
        Q_Secondaire2 = """
                    SELECT nom,img
                    FROM Interm_Rune
                    INNER JOIN Rune
                    ON Rune.id = Interm_Rune.runeID 
                        AND Rune.type = 'secondary'
                        AND Rune.arbre = %s AND Rune.ligne != %s
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                        AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    ORDER BY {}
                    LIMIT 1
                """

        Q_Secondaire2 = Q_Secondaire2.format(self.ordo)

        self.bdd.cur.execute(Q_Secondaire2,(secondaryTree,ligne,self.champ,self.lane,))
        rune = self.bdd.cur.fetchone()
        self.runeDic["Secondary"].append({"name" : rune[0], "icon" : self.getRuneIcon(rune[1])})