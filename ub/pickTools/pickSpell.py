import random

# Choisis 2 summoners parmi ceux qui existent
def run(difficulte, carte, bdd):

    def urlIcon(summoner_name):
        iconEnd = bdd.get.summIcon(summoner_name)
        return "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/"+iconEnd

    # Pour être sûr qu'on mets pas 2x le même summoner dans la liste
    def Summ_Add(summ_list):
        if len(summ_choice) < 2 : 

            # Evite de prendre 2x le même
            summ_taken = [x["name"] for x in summ_choice]
            summ_list  = [x for x in summ_list if x not in summ_taken]
            summoner_name = random.choice(summ_list)

            summoner_dic  = {"name" : summoner_name, "icon" : urlIcon(summoner_name)}
            summ_choice.append(summoner_dic)

            summ_list = [x for x in summ_list if x != summoner_name]

    # On extrait seulement ceux de la map correspondante
    summ_list = bdd.get.summs(carte)
    summ_choice = []
    
    # 100% flash + autre hasard
    if difficulte == 1 :    
        summoner_dic  = {"name" : "Flash", "icon" : urlIcon("Flash")}
        summ_list.remove("Flash")
        summ_choice.append(summoner_dic)

    # 50% flash + autre hasard
    elif difficulte == 2 : 
        summ_list += ['Flash']*(len(summ_list) - 2)

    # Tout doublon sauf certains (1x)
    elif difficulte == 3 :  
        summ_list += summ_list
        not_doublon = ['Flash','Heal','Ignite']
        for summoner_name in not_doublon: 
            summ_list.remove(summoner_name)

    # Tout sauf certains
    elif difficulte > 3 :   
        banlist = ['Flash','Heal','Ignite']
        if difficulte == 5 : 
            banlist += ['Barrier']
        for summoner_name in banlist: 
            summ_list.remove(summoner_name)

    # Tanpis si c'est executé une fois de trop
    Summ_Add(summ_list)
    Summ_Add(summ_list)

    return summ_choice