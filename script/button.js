window.onload = function() {
    let sp1 = document.getElementById("SP1");
    let sp2 = document.getElementById("SP2");
    
    
    sp2.classList.remove("square_part_2_container_re");
    sp2.classList.remove("square_part_2_container");
    
    let NextBtn = document.getElementById("nextBtn");
    
    sp1.classList.remove("square_part_1_container");

    let ClickCount = 0;

    NextBtn.addEventListener("click", function(e){
        if (ClickCount === 0) {
            e.preventDefault;

            sp1.classList.remove("square_part_1_container");

            void sp1.offsetWidth;

            sp1.classList.add("square_part_1_container");
            ClickCount += 1;

            setTimeout(function(){
                e.preventDefault;
                sp2.classList.remove("square_part_2_container");
                sp2.classList.remove("square_part_2_container_re");
                void sp2.offsetWidth;
                sp2.classList.add("square_part_2_container_re");
            }, 1000)
        }

        else if (ClickCount === 1) {
            e.preventDefault;
            sp2.classList.remove("square_part_2_container_re");

            sp2.classList.remove("square_part_2_container");

            void sp2.offsetWidth;
            sp2.classList.add("square_part_2_container");
        }

    }, false);
}


