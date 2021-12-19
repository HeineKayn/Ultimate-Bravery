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

    def getRuneIcon(self,tree,rune):

        # Y'en a certains qui pètes les couilles
        if rune == "aftershock":
            rune = "veteranaftershock"

        rune2 = rune
        if rune == "lethaltempo":
            rune2 = "lethaltempotemp"
        if rune == "tasteofblood":
            rune2 = "greenterror_tasteofblood"
        if rune == "celerity":
            rune2 = "celeritytemp"
        if rune == "nimbuscloack":
            rune2 = "6361"
        if rune == "nullifyingorb":
            rune2 = "pokeshield"

        icon = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/{}/{}/{}.png"
        icon = icon.format(tree.lower(),rune,rune2)
        return icon

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
                        SELECT nom,arbre
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
        self.runeDic["Keystone"] = {"name" : keystone[0], "icon" : self.getRuneIcon(self.primary_tree,keystone[0])} 

    def pickPrimaire(self):

        Q_Primaire = """
                    SELECT nom
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
            rune = self.bdd.cur.fetchone()[0]
            self.runeDic["Primary"].append({"name" : rune, "icon" : self.getRuneIcon(self.primary_tree,rune)})

    def pickSecondary(self):

        Q_Secondaire1 = """
                    SELECT nom,arbre,ligne
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
        rune, secondaryTree, ligne = self.bdd.cur.fetchone()
        self.runeDic["Secondary"].append({"name" : rune, "icon" : self.getRuneIcon(secondaryTree,rune)})

        # Deuxieme rune secondaire
        Q_Secondaire2 = """
                    SELECT nom
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
        rune = self.bdd.cur.fetchone()[0]
        self.runeDic["Secondary"].append({"name" : rune, "icon" : self.getRuneIcon(secondaryTree,rune)})