from quart import Quart, render_template, redirect, url_for
from discord.ext.ipc import Client
from datetime import datetime 

import os
import json
import random

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
disp = display.Displayer(bdd)

@app.route("/")
@app.route("/ub")
async def ultimateBravery():
	champions = bdd.get.championsFull()
	return await render_template('ultimateBravery.html', champions=champions)

@app.route("/")
async def logs():
	log_list = ["a","b"]
	return await render_template('logs.html',logs = log_list)


if __name__ == "__main__":
	app.run()