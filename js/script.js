import offcanvas from './_off-canvas';

offcanvas();


window.onscroll = function() {
    const nav = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add("scolled");
    } else {
        document.body.classList.remove("scolled");
    }

};



var main_triggers = (function() {    
    document.querySelectorAll(".trigger").forEach(function(element) {
        let trggr = element;
        element.addEventListener("click", function(element){ 
            trggr.parentNode.classList.toggle("open");
      }); 
    }); 
}());