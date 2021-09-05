window.onload = function() {
    var check = document.getElementById("check");
    var nav = document.getElementById("nav");

    
    check.addEventListener('click', function(){
        
        if(check.checked == true) {
            nav.style.opacity = 1;
            nav.style.zIndex = 99999;
        } else {
            nav.style.opacity = 0;
        }
    })
}