$(function(){

    // refresh automatiquement toutes les secondes
    window.setInterval(function(){
        loadNewLogs();

    }, 1000)

    function loadNewLogs(){
        var log_container = document.getElementById("log_container");
        $.ajax({
            url: "/update_logs",
            type: "POST",
            dataType: "json",
            success: function(data){
                // chope la div avec log_container comme id 
                log_container.innerHTML = data;
                // ici data est le contenu de logs_model modifié
            }
        });
    }

});

function resetLogs(){
	$.post('/reset_log'); // , ""
}