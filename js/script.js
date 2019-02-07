import offcanvas from './_off-canvas';
import GLightbox from '../node_modules/glightbox/dist/js/glightbox'
import Cookies from "../node_modules/js-cookie/src/js.cookie.js";

// Cookie Value Set
Cookies.set('name', 'value 33');

var main_OffCanvas = offcanvas();

var main_lightbox = GLightbox({
    selector: 'glightboxTest'
});

var main2_lightbox = GLightbox({
    selector: 'glightboxTest2'
});
      
var main3_lightbox = GLightbox({
    selector: 'glightboxTest3'
});

var main4_lightbox = GLightbox({
    selector: 'glightboxTest4'
});

var glightboxIframe = GLightbox({
    selector: 'glightboxIframe',
    height: 900,
    width: 500
});



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

            //Cookie value read
            console.log(Cookies.get('name'));
      }); 
    }); 

    
}());