$(document).ready(function() {
    let section_start = document.querySelectorAll(".blob_start")
    let section_end = document.querySelectorAll(".blob_end")

    let click = document.querySelector(".blob_first")

    let count = 0;

    for (let i = 0; i < section_start.length; i++) {
        let item = section_start.item(i);
        item.classList.remove("blob_start");
    }
    for (let i = 0; i < section_end.length; i++) {
        let item = section_end.item(i);
        item.classList.remove("blob_end");
    }

    click.addEventListener("click", function() {

        if(count === 0) {
            for (let i = 0; i < section_start.length; i++) {
                let item = section_start.item(i);
                item.classList.remove("blob_end");
            }


            for (let i = 0; i < section_start.length; i++) {
                let item = section_start.item(i);
                item.classList.add("blob_start");
            }
            count++;
        }

        else if(count === 1) {
            for (let i = 0; i < section_start.length; i++) {
                let item = section_start.item(i);
                item.classList.remove("blob_start");
            }


            for (let i = 0; i < section_start.length; i++) {
                let item = section_start.item(i);
                item.classList.add("blob_end");
            }
            count--;
        }
        
    })
});