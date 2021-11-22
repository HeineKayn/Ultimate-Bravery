
# Choisis 2 summoners parmi ceux qui existent
def run(difficulte, lane, carte, bdd):

    def Summ_Add(summ_list):

        if len(summ_choice) < 2 : 
            summ_list = [x for x in summ_list if x not in summ_choice]
            summ = random.choice(summ_list)
            summ_choice.append(summ)
            summ_list = [x for x in summ_list if x != summ]

    summ_list = bdd.get.summs(carte)
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