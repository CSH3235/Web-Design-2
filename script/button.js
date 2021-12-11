window.onload=function() {
    let sp1 = document.getElementById("SP1");
    let sp2 = document.getElementById("SP2");
    let sp3 = document.getElementById("SP3");

    let bg = document.getElementsByTagName("body")[0]

    let node1 = sp1.childNodes;
    ////////////////////////////////////////////////////////////////
    sp1.classList.remove("square_part_1_container");

    sp2.classList.remove("square_part_2_container_re");
    sp2.classList.remove("square_part_2_container");
    
    

    sp3.classList.remove("square_part_3_container_re");
    sp3.classList.remove("square_part_3_container");
    ////////////////////////////////////////////////////////////////
    sp1.classList.remove("square_part_1_container_back");
    sp1.classList.remove("square_part_1_container_back_re");


    sp2.classList.remove("square_part_2_container_back");
    sp2.classList.remove("square_part_2_container_back_re");

    sp3.classList.remove("square_part_3_container_back");
    sp3.classList.remove("square_part_3_container_back_re");
    ////////////////////////////////////////////////////////////////
    let NextBtn = document.getElementById("nextBtn");
    let PrevBtn = document.getElementById("prevBtn");

    let ClickCount = 0;


    NextBtn.addEventListener("click", function(e){

        if (ClickCount === 0) {
            document.body.style.background = "#A1C4FD";

            e.preventDefault;
            void sp1.offsetWidth;
            
            sp1.classList.remove("square_part_1_container_re");
            sp1.classList.add("square_part_1_container");

            sp2.classList.remove("square_part_2_container_re");
            sp2.classList.remove("square_part_2_container");
            

            sp3.classList.remove("square_part_3_container");
            sp3.classList.remove("square_part_3_container_re");

            sp1.classList.remove("square_part_1_container_back_re")
            sp2.classList.remove("square_part_2_container_back")

            ClickCount += 1;

            NextBtn.disabled = true;
            PrevBtn.disabled = true;

            setTimeout(function(){
                for(let i = 1; i < node1.length; i += 2) {
                    node1[i].style.zIndex = 0;
                }
                e.preventDefault;
                void sp2.offsetWidth;
                sp2.classList.add("square_part_2_container_re");
            
            }, 100);

            setTimeout(function(){
                if(NextBtn.disabled === true) {
                    NextBtn.disabled = false;
                    PrevBtn.disabled = false;
                }
            }, 1300);
        }
        
        else if (ClickCount === 1) {

            e.preventDefault;
        
            sp1.classList.remove("square_part_1_container_back_re");


            sp2.classList.remove("square_part_2_container_re");
            sp2.classList.remove("square_part_2_container"); 
            
            sp2.classList.remove("square_part_2_container_back_re");
            sp3.classList.remove("square_part_3_container_back");


            void sp2.offsetWidth;

            sp2.classList.add("square_part_2_container");
            ClickCount += 1;
            NextBtn.disabled = true;
            PrevBtn.disabled = true;

            setTimeout(function(){
                e.preventDefault;
                void sp3.offsetWidth;
                sp3.classList.add("square_part_3_container_re");
            }, 100)
            setTimeout(function(){
                if(NextBtn.disabled === true) {
                    NextBtn.disabled = false;
                    PrevBtn.disabled = false;
                }
            }, 1300);
        }
        
        else if (ClickCount === 2) {
            e.preventDefault;
            sp3.classList.remove("square_part_3_container_re");
            sp3.classList.remove("square_part_3_container");

            
            //////////////////////////////////////////////////////////////
            sp1.classList.remove("square_part_1_container_back");
            sp3.classList.remove("square_part_3_container_back_re");
            sp1.classList.remove("square_part_1_container_back_re");
            sp2.classList.remove("square_part_2_container_back");
            void sp3.offsetWidth;

            sp3.classList.add("square_part_3_container");

            NextBtn.disabled = true;
            PrevBtn.disabled = true;
            
            setTimeout(function(){
        
                e.preventDefault;
                sp1.classList.remove("square_part_1_container");
                sp1.classList.remove("square_part_1_container_re");
                void sp1.offsetWidth;
                sp1.classList.add("square_part_1_container_re");

                for(let i = 1; i < node1.length; i += 2) {
                    node1[i].style.zIndex = 9;
                }
                ClickCount = 0;
                
            }, 100)
            setTimeout(function(){
                if(NextBtn.disabled === true) {
                    NextBtn.disabled = false;
                    PrevBtn.disabled = false;
                }
            }, 1300);
        
        }
        console.log(ClickCount);
    }, false);


////////////////////////////////////////////////////////////////////////


    PrevBtn.addEventListener("click", function(e){
        console.log(ClickCount);
        if (ClickCount === 0) {
    
            e.preventDefault;
            void sp1.offsetWidth;
            sp1.classList.remove("square_part_1_container_re");
            sp1.classList.remove("square_part_1_container_back_re");
            sp1.classList.add("square_part_1_container_back");
            sp2.classList.remove("square_part_2_container_back");
            
            
            ClickCount = 2;

            PrevBtn.disabled = true;
            NextBtn.disabled = true;

            setTimeout(function(){
                document.body.style.background = "#f76161";
                for(let i = 1; i < node1.length; i += 2) {
                    node1[i].style.zIndex = 0;
                }
                e.preventDefault;
                void sp3.offsetWidth;
                sp3.classList.add("square_part_3_container_back_re");
                sp3.classList.remove("square_part_3_container");
            }, 1000);

            setTimeout(function(){
                if(PrevBtn.disabled === true) {
                    PrevBtn.disabled = false;
                    NextBtn.disabled = false;
                }
            }, 2100);
        }



        else if (ClickCount === 2) {
            
            e.preventDefault;
            sp3.classList.remove("square_part_3_container");

            sp3.classList.remove("square_part_3_container_re");
            sp3.classList.remove("square_part_3_container_back_re");
            //////////////////////////////////////////////////////////////
            sp1.classList.remove("square_part_1_container_back");
            
            void sp3.offsetWidth;

            sp3.classList.add("square_part_3_container_back");
            PrevBtn.disabled = true;
            NextBtn.disabled = true;
            
            setTimeout(function(){
                document.body.style.background = "#57ff97";
                e.preventDefault;
                sp1.classList.remove("square_part_1_container");
                sp1.classList.remove("square_part_1_container_re");
                sp2.classList.remove("square_part_2_container_back");
                void sp1.offsetWidth;
                sp2.classList.add("square_part_2_container_back_re");

                for(let i = 1; i < node1.length; i += 2) {
                    sp2.classList.remove("square_part_2_container");
                    node1[i].style.zIndex = 9;
                }
                ClickCount = 1;
                
            }, 1000)
            setTimeout(function(){
                if(PrevBtn.disabled === true) {
                    PrevBtn.disabled = false;
                    NextBtn.disabled = false;
                }
            }, 2100);
        
        }

        else if (ClickCount === 1) {
            
            e.preventDefault;
            sp2.classList.remove("square_part_2_container_back_re");
            sp3.classList.remove("square_part_3_container_back");
            void sp2.offsetWidth;

            sp2.classList.add("square_part_2_container_back");
            ClickCount = 0;
            PrevBtn.disabled = true;
            NextBtn.disabled = true;


        
            sp2.classList.remove("square_part_2_container_re");
            setTimeout(function(){
                document.body.style.background = "#a1c4fd";

                e.preventDefault;
                void sp1.offsetWidth;
                sp1.classList.add("square_part_1_container_back_re");
                sp1.classList.remove("square_part_1_container");
            }, 1000)
            setTimeout(function(){
                if(PrevBtn.disabled === true) {
                    PrevBtn.disabled = false;
                    NextBtn.disabled = false;
                }
            }, 2100);
        }


});
}


