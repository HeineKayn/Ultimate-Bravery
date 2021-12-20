<h3 align="center">Ultimate Bravery</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#database-structure">Database Structure</a></li>
    <li><a href="#difficulties">Difficulties</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/734811866152304680/922533390748614696/classic_d4_5.png" />
</p>

This project use web scrapping to retrive game data on diverse website. 
With those data we're able to generate builds for League of Legends champions according to an inputted difficulty parameter. 
When called, the program return a build that match the difficulty asked.
The difficulty of a build is defined by the winrate of every component (items, summoner spell, runes, lanes) individually but on a given champion.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PACKAGES -->
## Packages

### Scrapper
Module indépendant avec lequel on peut recupérer les informations. On peut le lancer à part et commenter les scrapper dont on a pas besoin. Il y'a aussi un système de barre de chargement pour améliorer le visuel. Un scrapping complet prend environ 1h.
### BDD
Relié à la base de donnée, on peut utiliser des fonctions dans Set et Get pour faciliter l'écriture des requetes usuelles. On peut de plus, grâce à Manage, recréer les tables au besoin.
### Picker
Récupére les éléments de la base de donnée et renvoie un dictionnaire contenant toutes les informations nécessaires (textuelles + images).
### Displayer
Permet de transformer un dictionnaire en une image affichant les informations. C'est le seul module que je n'ai pas refait entièrement et il est donc très brouillon.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DATABASE STRUCTURE -->
## Database Structure

### Stock informations about existing objects
* Champion `ID, nom`
    *  `ID` : Correspond à l'id que Riot assigne aux champion en fonction de leur date de sortie
* Lane `ID, nom`
* Item `ID, nom, type, img`
    * `img` : Moitié d'un url amenant vers static.wikia.nocookie.net (j'ai choisi ce lien parce qu'ils DDragon n'indique pas si un item est Mythique, Légendaire ou bien des Bottes)
* Rune `ID, riotID, nom, arbre, ligne, type, img`
    * `riotID`: Comme pour les champions, les runes ont un id unique assigné par riot
    * `arbre` : Precision, Domination, etc...
    * `ligne` : Sert à différencier les runes utilisés comme primaires où secondaires
    * `type`  : Keystone, Primary, Secondary
    * `img`   : Moitié d'un url menant vers ddragon.leagueoflegends.com (la correspondance est bizarre donc il fallait stocker l'adresse)
* Spell `ID, nom, classic, aram, img`
    * `classic` et `aram` : Booléens indiquant si on peut utiliser ce summoner sur les maps correspondantes
    * `img` : Moitié d'un url menant vers ddragon.leagueoflegends.com (la correspondance est bizarre donc il fallait stocker l'adresse)
    
### Gathered stats 
* SkillOrder `Id, ordre, championID`  (the one supposed to be the best for the given champion)
* Interm_Item `Id, winrate, pickrate, championID, laneID, itemID`
* Interm_Botte `Id, winrate, pickrate, championID, laneID, botteID`
* Interm_Keystone `Id, winrate, pickrate, championID, laneID, keystoneID`
* Interm_Lane `Id, winrate, pickrate, championID, laneID, laneID`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DIFFICULTIES -->
## Difficulties

### Difficulty 1 (Easy)
* Taking 5 random items from a pool of the 10 strongest
* Taking the best runes and spell order possible
* Summoners : Flash + 1 random summoner spell

### Difficulty 2 (Hard)
* Taking 5 random items from a pool of the 25 strongest and in wich we remove the 3 best ones
* Taking the best runes and spell order possible
* Summoners : 50% chances of having Flash and complet with random summoner spells

### Difficulty 3 (Very Hard)
* Everything is random
* Random summoners but slightly higher chances of having something else than `Heal, Ignite or Flash`

### Difficulty 4 (Hardocre)
* Taking 5 random items from a pool of the 25 worst and in wich we remove the 3 best worst
* Taking the worst runes and spell order possible
* Summoners : Random but without `Heal, Ignite or Flash`

### Difficulty 5 (Impossible)
* Taking 5 random items from a pool of the 10 worst
* Taking the worst runes and spell order possible
* Summoners : Random but without `Heal, Ignite or Flash`

<p align="right">(<a href="#top">back to top</a>)</p>
