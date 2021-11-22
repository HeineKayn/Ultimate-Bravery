
def run(difficulte, champ_name, bdd):

    Q_SkillOrder = """
                    SELECT ordre 
                    FROM SkillOrder 
                    WHERE ChampionID = (SELECT id FROM Champion WHERE nom = %s)
                   """

    bdd.cur.execute(Q_SkillOrder,(champ_name,))

    # Difficulte 1 ou 2 -> Meilleur ordre
    ordre = bdd.cur.fetchone()[0]

    # Difficulte 3 -> Ordre aléatoire
    if difficulte == 3 : 
        ordre_list = list("AEZ")
        random.shuffle(ordre_list)
        ordre = "".join(ordre_list) 

    # Difficulte 4 ou 5 -> Ordre opposé
    if difficulte > 3 : 
        ordre = ordre[::-1]

    # On a besoin que du premier spell à max au finale
    return ordre