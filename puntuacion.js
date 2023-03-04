let puntuacion_container = document.getElementById("puntuacion")
let puntuacion = localStorage.getItem("puntuacion")


puntuacion_container.innerHTML = `Puntuacion: ${puntuacion}`