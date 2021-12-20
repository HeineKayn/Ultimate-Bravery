function updateScroll(){
	var element = document.getElementsByClassName("section_messages")[0];
    element.scrollTop = element.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function(){
  	updateScroll();
  }, 500);
});