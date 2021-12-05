$(document).ready(function(){
    var x = document.getElementById("myAudio");
    x.loop = true; 
    var musica = true;
    //var btn_som = document.getElementById("somaqui");

    $(".somaqui").click(function() { 
        if (!musica) {
            x.pause(); 
            musica = true;
            $(".somaqui").removeClass("somativo");
            $(".somaqui").addClass("somdesativo");
            //btn_som.classList.remove("somativo");
            //btn_som.classList.add("somdesativo");
        } else {
            x.play();
            musica = false;
            $(".somaqui").removeClass("somdesativo");
            $(".somaqui").addClass("somativo");
            //btn_som.classList.add("somativo");
            //btn_som.classList.remove("somdesativo");
        }
    });
});