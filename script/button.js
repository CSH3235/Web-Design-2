window.onload = function() {
    let nextBtn = document.getElementsByClassName("nextBtn")[0];
    
    nextBtn.addEventListener('click', function() {
        function addClassName() {
                document.getElementById("square_3").className += 'active';
                alert(document.getElementById("square_3").className);
            }
    });
}


