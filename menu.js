let opcion0 = document.getElementById("opcion0")
let opcion1 = document.getElementById("opcion1")
let opcion2 = document.getElementById("opcion2")
let opcion3 = document.getElementById("opcion3")
let opcion4 = document.getElementById("opcion4")


opcion0.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "20")

})

opcion1.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "50")

})

opcion2.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "100")

})

opcion3.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "100000")

})

opcion4.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "contrareloj")

})

function irAlJuego(){
    window.location.href = "juego.html"
}