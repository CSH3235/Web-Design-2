
$(document).ready(function() {
    var check = document.getElementById("check");
    var nav = document.getElementById("nav");

    check.addEventListener('click', function(){
        if(check.checked === true) {
            nav.style.opacity = 1;
            nav.style.zIndex = 9;
        } else {
            nav.style.opacity = 0;
            
            nav.style.zIndex = -9;
    
            
        }

    });

});

