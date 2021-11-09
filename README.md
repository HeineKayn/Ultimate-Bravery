<h3 align="center">Ultimate Bravery</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#database-structure">Database Structure</a></li>
    <li><a href="#difficulties">Difficulties</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot](https://cdn.discordapp.com/attachments/663392854273556493/747591947098521721/ub.png)

This project use web scrapping to retrive game data on diverse website. 
With those data we're able to generate builds for League of Legends champions according to an inputted difficulty parameter. 
When called, the program return a build that match the difficulty asked.
The difficulty of a build is defined by the winrate of every component (items, summoner spell, runes, lanes) individually but on a given champion.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PACKAGES -->
## Packages

### Scrapper
wip
### Getter
wip
### Displayer
wip

<!-- DATABASE STRUCTURE -->
## Database Structure

### Stock informations about existing objects
* Champion `Id, nom`
* Lane `Id, nom`
* Item `Id, nom`
* Botte `Id, nom`
* Keystone `Id, nom, genre, ligne, type`
    * `genre` : Precision, Domination, etc...
    * `type`  : Keystone, Primary, Secondary
    
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
