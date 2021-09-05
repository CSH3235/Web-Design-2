window.onload = function() {
    let square_1 = document.getElementById("square_1");
    let square_2 = document.getElementById("square_2");
    let square_3 = document.getElementById("square_3");

    let square_4 = document.getElementById("square_4");
    let square_5 = document.getElementById("square_5");
    let square_6 = document.getElementById("square_6");
    square_4.classList.remove("square_4_ani_re");
    square_5.classList.remove("square_5_ani_re");
    square_6.classList.remove("square_6_ani_re");

    let NextBtn = document.getElementById("nextBtn");

    square_1.classList.remove("square_1_ani");
    square_2.classList.remove("square_2_ani");
    square_3.classList.remove("square_3_ani");

    let ClickCount = 0;

    NextBtn.addEventListener("click", function(e){
        if (ClickCount === 0) {
            e.preventDefault;

            square_1.classList.remove("square_1_ani");
            square_1.classList.remove("square_2_ani");
            square_1.classList.remove("square_3_ani");

            void square_1.offsetWidth;
            void square_2.offsetWidth;
            void square_3.offsetWidth;

            square_1.classList.add("square_1_ani");
            square_2.classList.add("square_2_ani");
            square_3.classList.add("square_3_ani");

            ClickCount += 1;

            setTimeout(function(){
                // 2번째 스타일 실행
                e.preventDefault;

                square_4.classList.remove("square_4_ani_re");
                square_5.classList.remove("square_5_ani_re");
                square_6.classList.remove("square_6_ani_re");
                void square_4.offsetWidth;
                void square_5.offsetWidth;
                void square_6.offsetWidth;
                square_4.classList.add("square_4_ani_re");
                square_5.classList.add("square_5_ani_re");
                square_6.classList.add("square_6_ani_re");
            }, 1000)
        }

        else if (ClickCount === 1) {
            alert("CSH babo")
        }

    }, false);
}


