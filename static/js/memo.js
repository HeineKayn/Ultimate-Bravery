function EmptyBox() {
	document.getElementById("SearchSubjectInput").value = "";
}

function SelectMember(){
	const profile = document.getElementById("SearchSubjectInput").value;
		if (profile.split(' ').length==3){
			const id = profile.split(' ')[2];
			if (id.length == 18){
				window.location.pathname = '/memo/' + id;
			}
		}
}


var SearchBar = function (event) {

    if (event.type = "focusout"){
    	SelectMember();
    }
    if (event.type = "keydown"){
    	if (event.key == 'Enter'){
    		SelectMember();
    	}
    	if (event.key == 'Backspace' || event.key == 'Delete'){
    		EmptyBox();
    	}
    }
};

function RemoveMemo(element) {
    window.location.pathname += "/" + String(element.getAttribute('indexValue')) ;
}

document.addEventListener("DOMContentLoaded", function() {
 	document.getElementById("SearchSubjectInput").addEventListener("keydown", SearchBar);
	document.getElementById("SearchSubjectInput").addEventListener("focusout", SearchBar);
});

