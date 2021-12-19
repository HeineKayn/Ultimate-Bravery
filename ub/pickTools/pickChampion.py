import random

# Renvoie un champion au hasard présent dans la DB, que la personne a et qui est pas problématique
def run(champion_notowned,bdd):

    # chope la liste de champion
    champion_list = bdd.get.champions()

    champion_banned = []
    # champion_banned += ['shaco','shyvana','kogmaw']
    champion_banned += champion_notowned

    # Enlève certains champions
    champion_list = [x for x in champion_list if x not in champion_banned]

    # Choisis au hasard parmi le reste
    name = random.choice(champion_list)

    # Chope l'id en fonction du nom
    uggid = bdd.get.uggId(name)
    icon = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/{}.png".format(uggid)

    return {"name" : name, "icon" : icon}