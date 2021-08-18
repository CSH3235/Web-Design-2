window.onload = function() {
    let nextBtn = document.getElementsByClassName("nextBtn")[0];
    
    element = document.getElementsByClassName("square_1"),
                document.getElementsByClassName("square_2"),
                document.getElementsByClassName("square_3");

    element.addEventListener("click", function(e) {
    e.preventDefault;
    
    // -> removing the class
    element.classList.remove("goTop_1");
    element.classList.remove("goTop_2");
    element.classList.remove("goTop_3");
    
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    element.offsetWidth = element.offsetWidth;
    
    // -> and re-adding the class
    element.classList.add("bounce");
    }, false);
}


