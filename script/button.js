window.onload=function() {
    let sp1 = document.getElementById("SP1");
    let sp2 = document.getElementById("SP2");
    let sp3 = document.getElementById("SP3");

    let node1 = sp1.childNodes;



    sp1.classList.remove("square_part_1_container");

    sp2.classList.remove("square_part_2_container_re");
    sp2.classList.remove("square_part_2_container");
    

    sp3.classList.remove("square_part_3_container_re");
    sp3.classList.remove("square_part_3_container");
    let NextBtn = document.getElementById("nextBtn");
    

    let ClickCount = 0;

    NextBtn.addEventListener("click", function(e){
        if (ClickCount === 0) {
            e.preventDefault;
            void sp1.offsetWidth;

            sp1.classList.remove("square_part_1_container_re");
            sp1.classList.add("square_part_1_container");
            ClickCount += 1;

            setTimeout(function(){
                e.preventDefault;
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
            ClickCount += 1;
            setTimeout(function(){
                e.preventDefault;
                void sp3.offsetWidth;
                sp3.classList.add("square_part_3_container_re");
            }, 1000)
        }

        else if (ClickCount === 2) {
            e.preventDefault;
            sp3.classList.remove("square_part_3_container_re");
            sp3.classList.remove("square_part_3_container");
            void sp3.offsetWidth;
            sp3.classList.add("square_part_3_container");

            setTimeout(function(){
                e.preventDefault;
                sp1.classList.remove("square_part_1_container");
                sp1.classList.remove("square_part_1_container_re");
                void sp1.offsetWidth;
                sp1.classList.add("square_part_1_container_re");
                for(let i = 1; i < node1.length; i += 2) {
                    node1[i].style.zIndex = 99;
                }
                
            }, 1000)
        
        }
    }, false);
}


