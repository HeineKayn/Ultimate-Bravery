var map = "classic";
var difficulte = "3";
var ip = "";

function getIP(json) {
	ip = json.ip;
}

/* Selection de la Map */
var buttonMap = function (event) {
	map = event.target.value;
	previous_active = document.getElementById("map_active");
	previous_active.removeAttribute("id");
	event.target.setAttribute("id","map_active");
};

/* Selection de la difficulte */
function sliderDifficulte() {
	difficulte = difficulte_slider.value;
	var number = document.getElementById("difficulte_number");

	switch (difficulte) {
		case "1":
			number.style.color = "green";
			number.innerHTML = "Facile";
			break;
		case "2":
			number.style.color = "greenyellow";
			number.innerHTML = "Medium";
			break;
		case "3":
			number.style.color = "yellow";
			number.innerHTML = "Difficile";
			break;
		case "4":
			number.style.color = "orange";
			number.innerHTML = "Très difficile";
			break;

		default:
			number.style.color = "red";
			number.innerHTML = "Impossible";
			break;
	}
};

// Filtre champions
function filterChampion() {
	var input = document.getElementById('championFilter');
	var filter = input.value.toLowerCase();

	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
		championName = champion.children[0].id;
		if (championName.includes(filter) || filter == ""){
			champion.style.display = "block";
		}
		else{
			champion.style.display = "none";
		}
	}
}

/* Selection des champions */
var championClick = function (event){

	// si on clique entre les icones ça mettait toute la fenetre en inactif
	if (event.target.parentNode.id != "champion_selector"){ 

		if (event.target.parentNode.classList.contains("champion_notowned")){
			event.target.parentNode.classList.remove("champion_notowned");
		}
		else{
			event.target.parentNode.classList.add("champion_notowned");
		}
	}
}
function allChampions() {
	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
		if (champion.classList.contains("champion_notowned")){
	  		champion.classList.remove("champion_notowned");
	  	}
	}
};
function noneChampions() {
	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
		if (!champion.classList.contains("champion_notowned")){
	  		champion.classList.add("champion_notowned");
	  	}
	}
};
function getChampions() {
	var champion_list = [];
	var selected_champions = document.getElementsByClassName("champion_notowned");
	for (var champion of selected_champions) {
	  	champion_list.push(champion.children[0].id);
	}
	return champion_list;
};

// Start Bravery
function startBravery(){
	var champions = getChampions();
	$.post('/start_bravery', {"champions" : champions, "map" : map, "difficulte" : difficulte, "ip" : ip}).done(function(response) {
		document.getElementById("ub_result_container").innerHTML = "<img src=\"" + response + "\">";
		document.cookie = response;
	});
}

document.addEventListener("DOMContentLoaded", function() {
	var buttons = document.getElementsByClassName("map_button");
	for (var button of buttons) {
	  button.addEventListener("click", buttonMap);
	}

	var difficulte_slider = document.getElementById("difficulte_slider");
	difficulte_slider.addEventListener("click", sliderDifficulte);

	document.getElementById("allButton").addEventListener("click", allChampions);
	document.getElementById("noneButton").addEventListener("click", noneChampions);
	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
	  champion.addEventListener("click", championClick);
	}

	document.getElementById("start_bravery").addEventListener("click", startBravery);

	// On met une image si la personne est déjà venue
	var cookie = document.cookie;
	document.getElementById("ub_result_container").innerHTML = "<img src=\"" + cookie + "\">";
});