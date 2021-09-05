window.onload = function() {
    let square_1 = document.getElementById("square_1");
    let square_2 = document.getElementById("square_2");
    let square_3 = document.getElementById("square_3");

    let square_4 = document.getElementById("square_4");
    // square_4.style.opacity = 0;

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
            }, 1000)
        }

        else if (ClickCount === 1) {
            alert("CSH")
        }

    }, false);
}


