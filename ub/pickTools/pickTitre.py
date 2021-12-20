import random
import json

# Prends un titre au hasard d'un fichier texte
def run(): 

    with open("./ressources/titre.txt",'r', encoding="utf8", errors='ignore') as file : 
        ub_titres = json.load(file)

    # 1 chance sur 2 de prendre un truc complet 
    if bool(random.getrandbits(1)) : 
        titre = random.choice(ub_titres["complet"])

    # ou de composer un titre random en unissant un nom et un adjectif
    else : 
        nom = random.choice(ub_titres["nom"])
        adjectif = random.choice(ub_titres["adjectif"])
        titre = "{} {}".format(nom,adjectif)
    
    return titre