import os 
import random
import json

import mariadb
import sys
from dotenv import load_dotenv

########################################################################################################################
########################################################################################################################

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

cur = conn.cursor()

################################################################################################################################################################################################################################################

################################################################################################################################################################################################################################################

################################################################################################################################################################################################################################################

def Pick_Champion(champion_allowed): # Renvoie un champion au hasard présent dans la DB, que la personne a et qui est pas problématique
    cur.execute("SELECT nom FROM Champion")
    champion_list = cur.fetchall()
    champion_list = [x[0] for x in champion_list]
    champion_banned = ['shaco','shyvana','kogmaw']
    champion_list = [x for x in champion_list if x in champion_allowed and x not in champion_banned]
    return random.choice(champion_list)

###########################################
###########################################

def Pick_Titre(): # Prends un titre au hasard d'un fichier texte

    with open("./annexes/ub/titre.txt",'r', encoding="utf8", errors='ignore') as file : 
        ub_titres = json.load(file)

    if bool(random.getrandbits(1)) : # 1 chance sur 2 de prendre un truc complet 
        titre = random.choice(ub_titres["complet"])

    else : # ou de composer un titre random en unissant un nom et un adjectif
        nom = random.choice(ub_titres["nom"])
        adjectif = random.choice(ub_titres["adjectif"])
        titre = "{} {}".format(nom,adjectif)
    
    return titre

###########################################
###########################################

def Pick_Summoners(difficulte, lane, carte):

    def Summ_Add(summ_list):

        if len(summ_choice) < 2 : 
            summ_list = [x for x in summ_list if x not in summ_choice]
            summ = random.choice(summ_list)
            summ_choice.append(summ)
            summ_list = [x for x in summ_list if x != summ]

    summ_list = ['Heal','Ghost','Barrier','Exhaust','Ignite','Cleanse','Flash']
    summ_choice = []

    if carte == "aram" : 
        summ_list += ['Clarity','Snowball']
    else : 
        summ_list += ['Teleportation']

        if lane == "jungle" : 
            summ_choice.append("Smite")
    
    if difficulte == 1 :    # 100% flash + autre hasard
        summ_choice.append('Flash')
        Summ_Add(summ_list)

    else : 

        if difficulte == 2 :    # 50% flash + autre hasard
            for i in range(len(summ_list) - 2):
                summ_list.append('Flash')

        elif difficulte == 3 :  # Tout doublon sauf certains
            doublon = []
            for summ in summ_list: 
                if summ not in ['Flash','Heal','Ignite'] :
                    doublon.append(summ)
            summ_list += doublon

        elif difficulte > 3 :   # Tout sauf certains

            banlist = ['Flash','Heal','Ignite']
            if difficulte == 5 : 
                banlist += ['Barrier']
            summ_list = [x for x in summ_list if x not in banlist]

        Summ_Add(summ_list)
        Summ_Add(summ_list)
    return summ_choice

###########################################
###########################################

def Pick_Lane(difficulte, carte, champ_name): # Renvoie le nom d'une lane en fonction de la difficulté et du champion

    Q_Lane = """
              SELECT nom,pickrate,winrate
              FROM Interm_Lane 
              INNER JOIN Lane
              ON Lane.id = Interm_Lane.laneID
                WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
              ORDER BY {}
             """

    ordo = 'pickrate ASC, winrate ASC'

    if carte == "aram" or difficulte < 3:    # Difficulté 1 et 2 (ou aram) -> meilleure lane
        ordo = 'pickrate DESC, winrate DESC'

    elif difficulte == 3 :                   # Difficulté 3 -> lane hasard
        ordo = 'RAND ()'
                                            # Difficulté 4 -> pire lane (automatique car valeurs par défaut)
    Q_Lane = Q_Lane.format(ordo)                  
    cur.execute(Q_Lane,(champ_name,))

    return cur.fetchone()[0]

###########################################
###########################################

def Pick_SkillOrder(difficulte, champ_name):

    Q_SkillOrder = """
                    SELECT ordre 
                    FROM SkillOrder 
                    WHERE ChampionID = (SELECT id FROM Champion WHERE nom = %s)
                   """
    cur.execute(Q_SkillOrder,(champ_name,))
    ordre = cur.fetchone()[0]

    if difficulte == 3 : # Le fait être aléatoire
        ordre_list = list("AEZ")
        random.shuffle(ordre_list)
        ordre = "".join(ordre_list) 

    if difficulte > 3 : # Le reverse
        ordre = ordre[::-1]

    return ordre[0] # On donne juste le premier spell à max en fait je me suis rappelé

###########################################
###########################################

def Pick_Stuff(difficulte, carte, lane, champ, limite_extreme, limite_centre, remove_centre, quantity, is_botte = False):

    ######-------------Query de Base---------------######

    Q_Item = """
                SELECT nom
                FROM Interm_Item
                INNER JOIN Item
                ON Item.id = Interm_Item.itemID 
                    WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                    AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                    AND nom NOT IN ({}) 
                ORDER BY {}
                LIMIT {}
              """

    ######------------Si c'est des bottes-----------######

    if is_botte : 
        Q_Item = Q_Item.replace("item","botte")
        Q_Item = Q_Item.replace("Item","Botte")

    ######-----------Constantes par défaut----------######

    banned_item = ["Defaut"] # En aram certains items sont supprimés, par défaut on enlève rien
    if carte == "aram" :
        banned_item = ["Voleur d'âmes de Mejai","Ange gardien"]

    for c,item in enumerate(banned_item) :
        banned_item[c] = '"' + item + '"'
    banned_string = ",".join(banned_item)

    ordo = '{} ASC, {} ASC'            # ordre croissant
    remove = 0                         # pas de remove 
    limite = '10'                      # la limite par défaut pour la difficulté 3

    ######-----------------Fonction------------------######

    def Extract_Item(Query): # Sert à utiliser la Query Générale pour le winrate puis le pickrate

        cur.execute(Query, (champ, lane,))
        items = cur.fetchall()
        items = items[remove:] # Si remove > 0 on enlève les plus forts/faible
        return [x[0] for x in items]

    #####------Modification de la query en fonction de la difficulté-------####

    if difficulte == 1 or difficulte == 5 :      # Pour la 1 et la 5 on prend le plus fort/faible pickrate et le plus fort/faible winrate et on pioche au hasard dans les deux  
        limite = limite_extreme

    elif difficulte == 2 or difficulte == 4 :    # Pour la 2 et 4 on prend 3 des plus forts/faibles et on enlève le plus fort/faible                 
        limite = limite_centre
        remove = remove_centre

    if difficulte < 3 :                          # Pour 1 et 2 on enlève les petits pickrates
        ordo = '{} DESC, {} DESC'

    if difficulte == 3 :                         # Pour la 3 on prend tout aléatoire
        'RAND ()'

    ######--------------Validation des Query---------------######

    Q_Item = Q_Item.format(banned_string,ordo,limite)
    Q_Item_WR = Q_Item.format('winrate','pickrate')
    Q_Item_PR = Q_Item.format('pickrate','winrate')

    item_list = Extract_Item(Q_Item_PR)
    # item_list += Extract_Item(Q_Item_WR)

    # print(champ,lane,item_list)

    final_item = []
    for i in range(quantity) :          # On prend un item au hasard et on fait en sorte qu'il puisse pas être choisi 2x 
        item = random.choice(item_list)
        final_item.append(item)
        item_list = [x for x in item_list if x != item]

    return final_item

###########################################
###########################################

### ===================== Variables à changer à la main pour équilibrer ================================ ####

def Pick_Item(difficulte, carte, lane, champ): 
    limite_extreme = '10' # Pour les difficultées 1-5 
    limite_centre = '25'  # Pour les difficultées 2-4 
    remove_centre = 3     # Pour les difficultées 2-4 
    quantity = 5          # Nombre d'item à prendre

    base = []
    if champ == "cassiopeia" :
        quantity = 6 
    elif champ == "viktor" : 
        quantity = 4
        base += ["Coeur hextech"]

    if carte != "aram" : 
        if lane == "jungle" :
            quantity -= 1 
            base += ["Item jungle"]
        elif lane == "support" :  
            quantity -= 1 
            base += ["Item supp"]

    return base + Pick_Stuff(difficulte, carte, lane, champ, limite_extreme, limite_centre, remove_centre, quantity, False)

def Pick_Botte(difficulte, carte, lane, champ): 
    limite_extreme = '1'  # Pour les difficultées 1-5 
    limite_centre = '3'   # Pour les difficultées 2-4 
    remove_centre = 1     # Pour les difficultées 2-4 
    quantity = 1          # Nombre d'item à prendre

    if champ == "cassiopeia" :
        quantity = 0

    return Pick_Stuff(difficulte, carte, lane, champ, limite_extreme, limite_centre, remove_centre, quantity, True)

###########################################
###########################################

def Pick_Rune(difficulte, lane, champ):
    Rune_Dic = {}

    Q_Rune = """
                SELECT nom,genre,ligne
                FROM Interm_Keystone
                INNER JOIN Keystone
                ON Keystone.id = Interm_Keystone.keystoneID 
                    AND Keystone.type = '{type}'
                    {cond}
                WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
                    AND laneID = (SELECT id FROM Lane WHERE nom = %s)
                ORDER BY {ordo}
                LIMIT {lim}
            """

    #---- Keystone

    if difficulte < 3 :     # Diff 1 ou 2 : Meilleure Keystone
        ordo = 'pickrate DESC'
    elif difficulte == 3 :  # Diff 3 : Keystone au hasard
        ordo = 'RAND ()'
    else :                  # Diff 4 ou 5 : Pire Keystone
        ordo = 'pickrate ASC'       

    limite = '1'
    type_rune = 'Keystone'
    condition = ''

    Q_Keystone = Q_Rune.format(type = type_rune, cond = condition, ordo= ordo, lim = limite)
    cur.execute(Q_Keystone,(champ,lane,))
    Keystone = cur.fetchone()
    Rune_Dic["Keystone"] = [Keystone[0]]

    #---- Primaire

    if difficulte == 2 or difficulte == 4 :     # Diff 2 ou 4 : Keystone best/worst, reste hasard
        ordo = 'RAND ()'

    condition = "AND Keystone.genre {genre} %s AND Keystone.ligne {ligne} %s"

    genre_prev = Keystone[1]
    type_rune = 'Primary'
    Q_Primaire = Q_Rune.format(type = type_rune, cond = condition, ordo = ordo, lim = limite)
    Q_Primaire = Q_Primaire.format(genre = '=', ligne = '=')

    Rune_Dic["Primary"] = []
    for numero in ['1','2','3'] : 
        cur.execute(Q_Primaire,(genre_prev,numero,champ,lane,))
        rune = cur.fetchone()
        Rune_Dic["Primary"].append(rune[0])

    #---- Secondaire 1

    Rune_Dic["Secondary"] = []
    type_rune = 'Secondary'
    Q_Secondaire = Q_Rune.format(type = type_rune, cond = condition, ordo =  ordo, lim = limite)

    Q_Secondaire_1 = Q_Secondaire.format(genre = '!=', ligne = '!=')

    cur.execute(Q_Secondaire_1,(genre_prev,'4',champ,lane,))
    Rune_Secondaire_1 = cur.fetchone()
    Rune_Dic["Secondary"].append(Rune_Secondaire_1[0])

    #---- Secondaire 2

    genre_prev = Rune_Secondaire_1[1]
    ligne_prev = Rune_Secondaire_1[2]

    Q_Secondaire_2 = Q_Secondaire.format(genre = '=', ligne = '!=')

    cur.execute(Q_Secondaire_2,(genre_prev,ligne_prev,champ,lane,))
    Rune_Secondaire_2 = cur.fetchone()
    Rune_Dic["Secondary"].append(Rune_Secondaire_2[0])

    return Rune_Dic

###############################################################################################################################################################################
######--------------------------------------------------------------------------------------------------------------------------------------------------------#################
######--------------------------------------------------------------------------------------------------------------------------------------------------------#################
###############################################################################################################################################################################

def Pick_All(difficulte,carte,champ_allowed):
    dic = {}
    dic["titre"] = Pick_Titre()

    dic["champion_name"] = Pick_Champion(champ_allowed)
    champ_name = dic["champion_name"]

    dic["lane"] = Pick_Lane(difficulte, carte, champ_name)
    lane = dic["lane"]

    dic["ordre"] = Pick_SkillOrder(difficulte, champ_name)
    dic["item"] = Pick_Item(difficulte, carte, lane, champ_name) 
    dic["item"] += Pick_Botte(difficulte, carte, lane, champ_name)
    dic["summ"] = Pick_Summoners(difficulte, lane, carte)
    dic["rune"] = Pick_Rune(difficulte, lane, champ_name)

    return dic

###########################################
###########################################

# champ_allowed = ["vi","singed","veigar"]

# difficulte = 3
# carte = "normal"
# lane = "support"
# champ_name = "yasuo"
# res = Pick_All(difficulte,carte,champ_allowed)
# print(res)

