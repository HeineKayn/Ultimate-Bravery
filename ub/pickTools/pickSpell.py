import random

# Choisis 2 summoners parmi ceux qui existent
def run(difficulte, carte, bdd):

    # Pour être sûr qu'on mets pas 2x le même summoner dans la liste
    def Summ_Add(summ_list):
        if len(summ_choice) < 2 : 
            summ_list = [x for x in summ_list if x not in summ_choice]
            summ = random.choice(summ_list)
            summ_choice.append(summ)
            summ_list = [x for x in summ_list if x != summ]

    # On extrait seulement ceux de la map correspondante
    summ_list = bdd.get.summs(carte)
    summ_choice = []
    
    # 100% flash + autre hasard
    if difficulte == 1 :    
        summ_choice.append('Flash')

    # 50% flash + autre hasard
    elif difficulte == 2 : 
        summ_list += ['Flash']*(len(summ_list) - 2)

    # Tout doublon sauf certains (1x)
    elif difficulte == 3 :  
        summ_list += summ_list
        not_doublon = ['Flash','Heal','Ignite']
        for summ in not_doublon: 
            summ_list.remove(summ)

    # Tout sauf certains
    elif difficulte > 3 :   
        banlist = ['Flash','Heal','Ignite']
        if difficulte == 5 : 
            banlist += ['Barrier']
        for summ in banlist: 
            summ_list.remove(summ)

    # Tanpis si c'est executé une fois de trop
    Summ_Add(summ_list)
    Summ_Add(summ_list)

    return summ_choice