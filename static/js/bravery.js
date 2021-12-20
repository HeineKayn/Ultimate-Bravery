var map = "classic";
var difficulte = 3;

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
	document.getElementById("difficulte_number").innerHTML = difficulte;
};

/* Selection des champions */
var championClick = function (event){
	if (event.target.parentNode.classList.contains("champion_active")){
		event.target.parentNode.classList.remove("champion_active");
	}
	else{
		event.target.parentNode.classList.add("champion_active");
	}
}
function allChampions() {
	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
		if (!champion.classList.contains("champion_active")){
	  		champion.classList.add("champion_active");
	  	}
	}
};
function noneChampions() {
	var champions = document.getElementsByClassName("champion_container");
	for (var champion of champions) {
		if (champion.classList.contains("champion_active")){
	  		champion.classList.remove("champion_active");
	  	}
	}
};
function getChampions() {
	var champion_list = [];
	var selected_champions = document.getElementsByClassName("champion_active");
	for (var champion of selected_champions) {
	  champion_list.push(champion.children.id)
	}
	return champion_list;
};

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
});