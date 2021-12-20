function ConfigElement(name,value) {
	$.post('/config_element', {"name" : name, "value" : value});
}


function ResetAvatar() {
	ConfigElement("avatar","https://cdn.discordapp.com/attachments/679867596878774343/803023865251889232/botix.png");
}

function Confirm(element) {
	input = document.getElementById(element.getAttribute("reference"));
	value = input.value;
	erreur = document.getElementById("erreur_url");
	if (element.name == "avatar"){
		if (value.includes("https://")){
			ConfigElement(element.name,value);
			erreur.style.display = "none";
		}
		else{
			erreur.style.display = "flex";
		}
	}
	else {
		if (value.length > 1){
			ConfigElement(element.name,value);
		}
	}

	if (["avatar","pseudo"].includes(element.name)){
		input.value = ""
	}
}


function AddKey(element) {
	input = document.getElementById(element.getAttribute("reference"));
	value = input.value;
	success = document.getElementById("success_key");
	$.post('/generate_key', {"number" : value}).done(function(response) {

		success.innerHTML = String(response["generated"]) + " clés générés"
    	success.style.display = "contents";

    	setTimeout(function(){
        	success.style.display = "none";
    	}, 5000);

	});
	input.value = 0;
}

