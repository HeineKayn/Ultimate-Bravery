
# Renvoie le nom d'une lane en fonction de la difficulté et du champion
def run(difficulte, carte, champ_name, bdd): 

    Q_Lane = """
              SELECT nom
              FROM Interm_Lane 
              INNER JOIN Lane
              ON Lane.id = Interm_Lane.laneID
                WHERE championID = (SELECT id FROM Champion WHERE nom = %s) 
              ORDER BY {}
             """

    # Difficulté 4 -> pire lane (cas par défault) 
    ordo = 'pickrate ASC, winrate ASC'

    # Difficulté 1 et 2 (ou aram) -> meilleure lane
    if carte == "aram" or difficulte < 3:   
        ordo = 'pickrate DESC, winrate DESC'

    # Difficulté 3 -> lane hasard   
    elif difficulte == 3 :                   
        ordo = 'RAND ()'
                                            
    Q_Lane = Q_Lane.format(ordo)                  
    bdd.cur.execute(Q_Lane,(champ_name,))

    return bdd.cur.fetchone()[0]
