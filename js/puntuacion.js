let puntuacion_container = document.getElementById("puntuacion")
let puntuacion = localStorage.getItem("puntuacion")
let max_score_personal_container = document.getElementById('max-score')
let max_score_personal = localStorage.getItem('max-score')

//para evitar el null cuando lo usa por primera vez
if(max_score_personal == null){
    max_score_personal = 0
}

puntuacion_container.innerHTML = `Puntuacion: ${puntuacion}`

max_score_personal_container.innerHTML = `Máxima puntuación: ${max_score_personal}

    <br>(solo aplica para contrareloj y hardcore)

`


function irAlMenu(){
    window.location.href = 'index.html'
}
