var guild   = "";
var channel = "";
var force_refresh = false;

function Select(target){
    if (target.value != ""){

        if (target.getAttribute("reference") == "guild" && target.value != guild){

            const datalist = document.getElementById("channel_datalist");
            document.getElementById("channel_input").value = "";
            datalist.innerHTML = "";
            guild = target.value;

            $.post('/select_guild', {"guild" : target.value}).done(function(response) {
                response["channel_list"].forEach(function(channel){
                    var option = document.createElement("option");
                    option.text = channel;
                    datalist.appendChild(option);
                });
            }).fail(function() {
                console.log("Ce serveur n'existe pas")
            });

        }
        else if (target.getAttribute("reference") == "channel" && (target.value != channel || force_refresh) ) {

            const sendInput = document.getElementById("sendMessageInput");
            const section = document.getElementById("section_messages");
            const innerSection = document.createElement("div");
            channel = target.value;

            $.post('/select_channel', {"guild" : guild, "channel" : target.value}).done(function(response) {
                sendInput.placeholder = "Envoyez un message à #" + channel;
                messages = response["messages"];
                messages.forEach(function(message){

                    const container = document.createElement("div");
                    container.className = "container_message";
                    const container_pp = document.createElement("div");
                    container_pp.className = "container_pp_message";
                    const container_entete = document.createElement("div");
                    container_entete.className = "container_entete_message";
                    const container_content = document.createElement("div");
                    container_content.className = "container_content_message";

                    const pp_mess = document.createElement("img");
                    pp_mess.className = "pp_message";
                    pp_mess.src = message["avatar"];
                    pp_mess.width = 85;
                    container_pp.appendChild(pp_mess);

                    const pseudo_mess = document.createElement("div");
                    pseudo_mess.className = "pseudo_message";
                    pseudo_mess.style.color = message["colour"];
                    pseudo_mess.innerHTML = message["name"];
                    const horaire_mess = document.createElement("div");
                    horaire_mess.className = "horaire_message";
                    horaire_mess.innerHTML = message["date"];
                    container_entete.appendChild(pseudo_mess);
                    container_entete.appendChild(horaire_mess);

                    message["content"].forEach(function(content){
                        const content_mess = document.createElement("div");
                        content_mess.className = "content_message";
                        content_mess.innerHTML = content;
                        container_content.appendChild(content_mess);
                    });
                    message["attachements"].forEach(function(attach){
                        const container_attach = document.createElement("div");
                        container_attach.className = "container_attach_message";
                        const attach_mess = document.createElement("img");
                        attach_mess.className = "attach_message";
                        attach_mess.src = attach["url"];
                        container_attach.appendChild(attach_mess);
                        container_content.appendChild(container_attach);
                    });

                    const clear = document.createElement("div");
                    clear.style.clear = "both";

                    container.appendChild(container_pp);
                    container.appendChild(container_entete);
                    container.appendChild(container_content);
                    container.appendChild(clear);
                    innerSection.appendChild(container);

                });
                section.innerHTML = "";
                section.appendChild(innerSection);

                updateScroll();
                sendInput.disabled = false;


            }).fail(function() {
                console.log("Ce channel n'existe pas")
                /*alerte ou flasher ?*/
            });

        }

    }
}


var SearchBar = function (event) {

    if (event.type = "focusout"){
    	Select(event.target);
    }
    if (event.type = "keydown"){
    	if (event.key == 'Enter'){
    		Select(event.target);
    	}
    	if (event.key == 'Backspace' || event.key == 'Delete'){
    		event.target.value = "";
    	}
    }
};

function updateScroll(){
    setTimeout(function(){
        var element = document.getElementById("section_messages");
        element.scrollTop = element.scrollHeight;
    }, 500);
}

function Send(event){
    element = document.getElementById("sendMessageInput");
    if (element.value != "" && event.key == 'Enter' && !event.shiftKey){
        $.post('/send_message', {"guild" : guild, "channel" : channel, "content" : element.value});
        setTimeout(function(){
            element.value = "";
            force_refresh = true;
            var target = document.getElementById("channel_input");
            Select(target);
            force_refresh = false;
        }, 10);
    }
}


document.addEventListener("DOMContentLoaded", function() {
 	document.getElementById("guild_input").addEventListener("keydown", SearchBar);
	document.getElementById("guild_input").addEventListener("focusout", SearchBar);
    document.getElementById("channel_input").addEventListener("keydown", SearchBar);
    document.getElementById("channel_input").addEventListener("focusout", SearchBar);
    document.getElementById("sendMessageInput").addEventListener("keydown", Send);
});

