var loginBar = function (event) {

    if (event.type = "keydown" && String(event.target.value) !== ""){
    	if (event.key == 'Enter'){
    		window.location.pathname += "/" + String(event.target.value) ;
    	}
    	if (event.key == 'Backspace' || event.key == 'Delete'){
    		event.target.value = "";
    	}
    }
};

document.addEventListener("DOMContentLoaded", function() {
 	document.getElementById("loginInput").addEventListener("keydown", loginBar);
});

