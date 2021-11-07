import discord
from discord.ext import commands
from discord.utils import get
import asyncio
import os 

import random
import json
import sys

from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import re 

from ub_doc import Pick_All
from ub_display import DisplayUB

########################################################################################################################
########################################################################################################################

class ub_maker(commands.Cog):

    def __init__(self,bot):
        self.bot = bot

        self.doc_champ = "./annexes/ub/champ_list.txt"
        with open(self.doc_champ,'r') as json_file:
            self.champ_list = json.load(json_file)

        self.doc_profiles = "./annexes/ub/ub_profiles.txt"
        try :
            with open(self.doc_profiles,'r') as json_file:
                self.profile_dic = json.load(json_file) 
        except : 
            self.profile_dic = {}


    def Update_Doc(self):
        with open(self.doc_profiles,'w') as outfile : 
            json.dump(self.profile_dic,outfile,indent=4)

    def Match_Alias(self,alias):
        try :
            match_alias = process.extractOne(alias, self.profile_dic.keys())
            if match_alias[1] > 80 : 
                alias = match_alias[0]
        except : 
            pass
        return alias

########################################################################################################################
########################################################################################################################

    @commands.command(name='bravery',aliases=['ub','ultimatebravery','challenge'], help='-> Ultimate Bravery',hidden=True) # Ultimate Bravery
    async def bravery(self, ctx, difficulte: int = 3, alias = "classique", carte : str = "aram"):

        if alias in list(self.profile_dic.keys()) :
            champ_allowed = self.profile_dic[alias]

            dic = Pick_All(difficulte,carte,champ_allowed)
            img = DisplayUB(dic)

            img.save('./annexes/ub/imgub/ub.png', 'PNG')
            await ctx.send(file=discord.File('./annexes/ub/imgub/ub.png'))

        else :
            await ctx.send("Cet alias n'existe pas, alias existants :\n{}".format(", ".join(list(self.profile_dic.keys()))))


################################################################################################################################################################################################################################################
################################################################################################################################################################################################################################################

################################################################################################################################################################################################################################################


    @commands.command(name='add_bravery',aliases=['addub','adub','addbrave'], help='-> Ajoute des champions à ton profil',hidden=True) # Ultimate Bravery
    async def add_bravery(self, ctx, alias, *args):

        alias = self.Match_Alias(alias)

        if not alias in list(self.profile_dic.keys()) : 
            self.profile_dic[alias] = []

        if alias != "classique" : 
            added_list = []
            for champ in args :

                try :
                    approx_champ = process.extractOne(champ, self.champ_list)
                    if approx_champ[1] > 80 : 
                        self.profile_dic[alias].append(approx_champ[0])
                        added_list.append(approx_champ[0])
                except :
                    pass

            self.Update_Doc()
            
            if len(added_list) > 0 :
                await ctx.send("`{}` ont été ajoutés".format(", ".join(added_list)))
            else : 
                await ctx.send("Aucun champion trouvé")

#############################

    @commands.command(name='remove_bravery',aliases=['removeub','rmub','rmbrave'], help='-> Enlève des champions à ton profil',hidden=True) # Ultimate Bravery
    async def remove_bravery(self, ctx, alias, *args):

        alias = self.Match_Alias(alias)

        if not alias in list(self.profile_dic.keys()) :
            self.profile_dic[alias] = self.champ_list.copy()

        if alias != "classique" :
            removed_list = []
            for champ in args :

                try :
                    approx_champ = process.extractOne(champ, self.champ_list)
                    if approx_champ[1] > 80 : 
                        self.profile_dic[alias].remove(approx_champ[0])
                        removed_list.append(approx_champ[0])
                except : 
                    pass

            self.Update_Doc()

            if len(removed_list) > 0 :
                await ctx.send("`{}` ont été supprimés".format(", ".join(removed_list)))
            else : 
                await ctx.send("Aucun champion trouvé")

#############################

    @commands.command(name='clear_bravery',aliases=['clearub','club','clbrave'], help='-> Supprime le profil profil',hidden=True) # Ultimate Bravery
    async def clear_bravery(self, ctx, alias):

        alias = self.Match_Alias(alias)

        if alias in list(self.profile_dic.keys()) and alias != "classique":
            self.profile_dic.pop(alias)

        self.Update_Doc()
        await ctx.send("Le profil `{}` a été supprimé".format(alias))

#############################

    @commands.command(name='display_bravery',aliases=['displayub','dispub','dispbrave'], help='-> Montre les champions associés à ton profil',hidden=True) # Ultimate Bravery
    async def display_bravery(self, ctx, alias=""):

        alias = self.Match_Alias(alias)

        if alias in list(self.profile_dic.keys()) :
            await ctx.send("Liste des champions de {} :\n{}".format(alias,", ".join(sorted(self.profile_dic[alias]))))
        else :
            await ctx.send("Cet alias n'existe pas, alias existants :\n{}".format(", ".join(list(self.profile_dic.keys()))))

def setup(bot):
    bot.add_cog(ub_maker(bot))