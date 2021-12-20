import random

# Réglages pour les items 
item_limite_extreme = '10' # Pour les difficultées 1-5 
item_limite_centre = '25'  # Pour les difficultées 2-4 
item_remove_centre = 3     # Pour les difficultées 2-4 

# Réglages pour les bottes
botte_limite_extreme = '1'  # Pour les difficultées 1-5 
botte_limite_centre = '3'   # Pour les difficultées 2-4 
botte_remove_centre = 1     # Pour les difficultées 2-4 

# Réglages pour les mythiques
mythic_limite_extreme = '1'  # Pour les difficultées 1-5 
mythic_limite_centre = '3'   # Pour les difficultées 2-4 
mythic_remove_centre = 1     # Pour les difficultées 2-4 

class BuildPicker():

    def __init__(self,difficulte,champ,lane,carte,bdd):
        self.difficulte = difficulte
        self.champion = champ
        self.lane = lane
        self.carte = carte
        self.bdd = bdd

        self.build = []
        self.difficultyTranslater()

    def difficultyTranslater(self):

        #####---- Ordre 

        # Diff 1 ou 2 : Meilleure Rune
        if self.difficulte < 3 :     
            self.ordo = 'pickrate DESC, winrate DESC'

        # Diff 3 : Rune au hasard    
        elif self.difficulte == 3 : 
            self.ordo = 'RAND ()'

        # Diff 4 ou 5 : Pire Rune
        else :                  
            self.ordo = 'pickrate ASC, winrate ASC' 

        #####---- Ecremage 

        # Diff 1 ou 5 : On prend parmi les 10 meilleures
        if self.difficulte == 1 or self.difficulte == 5 :  

            self.item_limite   = item_limite_extreme
            self.mythic_limite = mythic_limite_extreme
            self.botte_limite  = botte_limite_extreme

            self.item_remove = self.mythic_remove = self.botte_remove = 0

        # Diff 2 ou 4 : On prend parmi les 25 meilleures et on enlèves les 3 meilleures dedans
        elif self.difficulte == 2 or self.difficulte == 4 :   

            self.item_limite   = item_limite_centre
            self.mythic_limite = mythic_limite_centre
            self.botte_limite  = botte_limite_centre

            self.item_remove = item_remove_centre
            self.mythic_remove = mythic_remove_centre
            self.botte_remove = botte_remove_centre

        # Diff 3 : Le nombre qu'on prend n'importe peu car c'est choisi au hasard
        # Par défaut on prend donc autant que limite_extreme (10)
        else :   

            self.item_limite   = item_limite_extreme
            self.mythic_limite = mythic_limite_extreme
            self.botte_limite  = botte_limite_extreme

            self.item_remove = self.mythic_remove = self.botte_remove = 0


    def pickItem(self,nb):

        Q_Item = """
                SELECT nom,img
                FROM Interm_Item
                INNER JOIN Item
                ON Item.id = Interm_Item.itemID 
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                    AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    AND nom NOT IN ({}) 
                    AND type = 'legendaires'
                ORDER BY {}
                LIMIT {}
              """

        # En aram certains items sont supprimés
        banned_item = ["'Defaut'"] # Par défaut on enleve rien
        if self.carte == "aram" :
            banned_item = ["\"Guardian angel\"","\"Mejai's soulstealer\""]
        banned_item = ",".join(banned_item)

        # On récupére la liste d'item
        Q_Item = Q_Item.format(banned_item,self.ordo,self.item_limite)
        self.bdd.cur.execute(Q_Item,(self.champion,self.lane,))
        item_list = self.bdd.cur.fetchall()

        # On enlève les plus forts/faibles si c'est nécéssaire
        item_list = item_list[self.item_remove:]

        # On mélange la liste et on prends les 'nb' premiers
        random.shuffle(item_list)
        items = item_list[:nb]

        # On transforme la liste de tuple en liste de dic
        for name,icon in items:
            icon = "https://static.wikia.nocookie.net/leagueoflegends/images" + icon
            self.build.append({"name" : name, "icon" : icon})

    def pickMythic(self):

        Q_Mythic = """
                SELECT nom,img
                FROM Interm_Item
                INNER JOIN Item
                ON Item.id = Interm_Item.itemID 
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                    AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    AND type = 'mythiques'
                ORDER BY {}
                LIMIT {}
              """

        # On récupére la liste d'item
        Q_Mythic = Q_Mythic.format(self.ordo,self.mythic_limite)
        self.bdd.cur.execute(Q_Mythic,(self.champion,self.lane,))
        mythic_list = self.bdd.cur.fetchall()

        # On enlève les plus forts/faibles si c'est nécéssaire
        mythic_list = mythic_list[self.mythic_remove:]

        # On mélange la liste et on prends les 'nb' premiers
        random.shuffle(mythic_list)
        name,icon = mythic_list[0]

        icon = "https://static.wikia.nocookie.net/leagueoflegends/images" + icon
        self.build.append({"name" : name, "icon" : icon})

    def pickBotte(self):

        Q_Botte = """
                SELECT nom,img
                FROM Interm_Item
                INNER JOIN Item
                ON Item.id = Interm_Item.itemID 
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                    AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    AND type = 'bottes'
                ORDER BY {}
                LIMIT {}
              """

        # On récupére la liste d'item
        Q_Botte = Q_Botte.format(self.ordo,self.botte_limite)
        self.bdd.cur.execute(Q_Botte,(self.champion,self.lane,))
        botte_list = self.bdd.cur.fetchall()

        # On enlève les plus forts/faibles si c'est nécéssaire
        botte_list = botte_list[self.botte_remove:]

        # On mélange la liste et on prends les 'nb' premiers
        random.shuffle(botte_list)
        name,icon = botte_list[0]

        icon = "https://static.wikia.nocookie.net/leagueoflegends/images" + icon
        self.build.append({"name" : name, "icon" : icon})

    def run(self):

        # Certains champions ne peuvent pas prendre de botte
        ban_list = ["cassiopeia"]
        if self.champion not in ban_list :
            self.pickBotte()

        self.pickMythic()

        # On rajoute autant d'item qu'il reste de place
        nbItemRestant = 6 - len(self.build)
        self.pickItem(nbItemRestant)

        random.shuffle(self.build)
        return self.build