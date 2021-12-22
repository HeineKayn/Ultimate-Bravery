from quart import Quart, render_template, jsonify, redirect, url_for

import os
import datetime
import json

# ---------------

from dotenv import load_dotenv

load_dotenv()
app_pass = os.getenv('APP_Pass')

# ---------------

app = Quart(__name__)

# ---------------

from quart_auth import *

auth_manager = AuthManager(app)
app.secret_key = app_pass  # Do not use this key
app.config.from_mapping(QUART_AUTH_COOKIE_HTTP_ONLY = False)
app.config.from_mapping(QUART_AUTH_COOKIE_SECURE    = False)
app.config.from_mapping(QUART_AUTH_COOKIE_SECURE    = False)

# ---------------

from ub import *

# ---------------

bdd  = bdd.BDD()
display = display.Displayer(bdd)
pick = pick.Picker(bdd)

logPath = "./static/txt/logs.txt"
ubImgPath = "./static/image/ubResult"

@app.route("/")
@app.route("/ub")
async def ultimateBravery():
	champions = bdd.get.championsFull()
	return await render_template('ultimateBravery.html', champions=champions)

@app.route("/start_bravery", methods=['POST'])
async def startBravery():
	dic = await request.form
	champions  = dic.getlist("champions[]")
	map        = dic["map"]
	difficulte = int(dic["difficulte"])

	date = datetime.datetime.now()

	# On fait l'image et on l'enregistre avec un tag unique
	datetag    = date.strftime("%m%d%H%f")
	path       = ubImgPath + "/d{}_{}_{}.png".format(difficulte,map,datetag)
	img        = display.run(difficulte,map,champions)
	img.save(path)

	# On écrit dans les logs

	with open(logPath, "r") as f:
		logs = json.load(f)
	
	with open(logPath, 'w') as f:
		dateString = date.strftime("Le %d/%m/%Y a %H:%M:%S")
		ip = dic["ip"]
		logs.append({"date" : dateString, "ip" : ip, "path" : path})
		json.dump(logs, f)

	return path

#------ LOGS

@app.route("/update_logs", methods=['POST'])
async def updateLogs():
	with open(logPath, "r") as f:
		logs = json.load(f)
	return jsonify(await render_template("logs_model.html",logs=logs))

@app.route("/reset_log", methods=['POST'])
async def resetLogs():

	# Efface dans logs.txt
	with open(logPath, 'w') as f:
		json.dump([], f)
	# Efface les images sauvegardés
	for f in os.listdir(ubImgPath):
		os.remove(os.path.join(ubImgPath, f))
	return ""

@app.route("/logs")
async def logs():
	with open(logPath, "r") as f:
		logs = json.load(f)
	return await render_template('logs.html',logs=logs)

if __name__ == "__main__":
	app.run(host="localhost", port=8000, debug=True)