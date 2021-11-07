import os 
import random
import json

import mariadb
import sys
from dotenv import load_dotenv

from PIL import Image,ImageFont,ImageDraw

from ub_doc import Pick_All
from ub_display import DisplayUB

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

cur.execute("SELECT nom FROM Champion ORDER BY nom")
champs = cur.fetchall()
champs = [x[0] for x in champs if x[0] not in ['shaco','shyvana','kogmaw']]

for difficulte in [1,2,3,4,5] : 
    for champ in champs :

        carte = "aram"
        champ_allowed = [champ]

        dic = Pick_All(difficulte,carte,champ_allowed)

        img = DisplayUB(dic)
        img.save('./annexes/ub/imgtest3/{}/{}.png'.format(str(difficulte),champ), 'PNG')
