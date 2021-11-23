import random

# Renvoie un champion au hasard présent dans la DB, que la personne a et qui est pas problématique
def run(champion_notowned,bdd):

    bdd.cur.execute("SELECT nom FROM Champion")

    # Transforme en liste
    champion_list = bdd.cur.fetchall()

    # champion_banned = ['shaco','shyvana','kogmaw']
    champion_banned = []
    champion_banned += champion_notowned

    # Enlève certains champions
    champion_list = [x for x in champion_list if x not in champion_banned]

    # Choisis au hasard parmi le reste
    name = random.choice(champion_list)

    return name