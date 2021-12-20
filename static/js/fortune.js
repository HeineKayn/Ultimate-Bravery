var count_coup = 0;

function UpdateAffiche() {
	affiche = document.getElementById("coupon_state")

	if (count_coup > 0){ 
	    affiche.innerText = count_coup.toString();
	    affiche.style.color = "green";
	}
	else{ 
	    affiche.innerText = "Aucun";
	    affiche.style.color = "red";
	}
}

var keyAdd = function (event) {
    if (event.type = "keydown"){
    	if (event.key == 'Enter'){

    		setTimeout(function(){
			    $.post('/use_key', {"key" : event.target.value}).done(function(response) {
			    		console.log(response["key_exist"])
						if (response["key_exist"] == true){
							count_coup ++;
    						event.target.value = '';
    						UpdateAffiche();
						}
					});
			}, 500);  

    	}
    	if (event.key == 'Backspace' || event.key == 'Delete'){
    		event.target.value = '';
    	}
    }
};

function OpenChest(element) {

	if (count_coup > 0){

		count_coup --;
		UpdateAffiche() 
		
		element.className = "coffre_open";
		const image_coffre = element.getElementsByTagName("img")[0]
		image_coffre.src = "../static/image/coffre_ouvert.png"
		element.getElementsByClassName("coffre_chiffre")[0].remove();

		const content_pop = document.createElement("div");
		content_pop.classList.add("coffre_content");
		content_pop.innerText = "?";
		element.insertBefore(content_pop, image_coffre);

		var id = setInterval(monte, 1);
		var hauteur = 0;
		var marginTop = 120;
	  	function monte() {

		    if (marginTop < 1) {
		      clearInterval(id);
		    } 
		    else {
		    	marginTop -= 2;
			    content_pop.style.marginTop = marginTop + 'px';

			    if (hauteur < 100){
					hauteur += 2; 
			      	content_pop.style.height = hauteur + 'px'; 
			    }

			    if (marginTop % 5 === 0){
			    	content_pop.innerText += "?";
			    	content_pop.style.color = '#'+Math.random().toString(16).substr(-6);
			    }
		    }
		 }

		/* FAIRE EN SORTE QUE CA GROSSISSE APRES ETRE MONTE*/
		/*var largeur = 140;
		var marginLeft = 30;
		var id = setInterval(elargie, 1);
		function elargie() {

		    if (marginTop < 1) {
		      clearInterval(id);
		    } 
		    else {
		    	marginTop -= 2;
			    content_pop.style.marginTop = marginTop + 'px';

			    if (hauteur < 100){
					hauteur += 2; 
			      	content_pop.style.height = hauteur + 'px'; 
			    }
		    }
		 }*/

		setTimeout(function(){
		    $.post('/fortune_open', {"id_coffre" : String(element.getAttribute('indexValue'))
				}).done(function(response) {
                	element.innerHTML = "<div class='coffre_content'>"+ response["content"] +"</div><img width=220 src='../static/image/coffre_ouvert.png' alt ='coffre ouvert'></img>"
            	}).fail(function() {
                	console.log("Fail");
            });
		}, 500);  

	}
	else{
		document.getElementById("keyInput").focus();
		var size = window.getComputedStyle(document.getElementById("coupon_state"), null).getPropertyValue('font-size').split('p')[0];
		size = parseInt(size);
		if (size < 60){
			size += 5 ;
			document.getElementById("coupon_state").style.fontSize = size + "px";
		}
		if (size >= 60){
			document.getElementById("coupon_state").style.textDecoration = "underline";
		}
	}
}

document.addEventListener("DOMContentLoaded", function() {
 	document.getElementById("keyInput").addEventListener("keydown", keyAdd);
});