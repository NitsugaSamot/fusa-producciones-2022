document.addEventListener('DOMContentLoaded', function() {
    verMas()

    verMision()

    verServicios()

    verVision()

    verValores()

    verTeam()
})

function verMas() {
    const verMas = document.querySelector('#titulo-gral')
    verMas.addEventListener('click', mostrarContenidoMas)
}

function mostrarContenidoMas() {
    const cardMas = document.querySelector('.mas')

    cardMas.classList.toggle('mostrar-mas')
}



//Mision

function verMision() {
    const verMision = document.querySelector('#mision')
    verMision.addEventListener('click', mostrarMision)
}

function mostrarMision() {
    const cardMision = document.querySelector('.contenido-mision')

    cardMision.classList.toggle('mostrar-mision')
}

//Vision

function verVision() {
    const verVision = document.querySelector('#vision')
    verVision.addEventListener('click', mostrarVision)
}

function mostrarVision() {
    const cardVision = document.querySelector('.contenido-vision')

    cardVision.classList.toggle('mostrar-vision')
}

//Valores

function verValores() {
    const verValores = document.querySelector('#valores')
    verValores.addEventListener('click', mostrarValores)
}

function mostrarValores() {
    const cardValores = document.querySelector('.contenido-valores')

    cardValores.classList.toggle('mostrar-valores')
}

// Servicios

function verServicios() {
    const verServicios = document.querySelector('#servicios')
    verServicios.addEventListener('click', mostrarServicios)
}

function mostrarServicios() {
    const cardServicios = document.querySelector('.contenido-servicios')

    cardServicios.classList.toggle('mostrar-servicios')
}

// Team Creativo

function verTeam() {
    const verTeam = document.querySelector('#team')
    verTeam.addEventListener('click', mostrarTeam)
}

function mostrarTeam() {
    const cardTeam = document.querySelector('.contenido-team')

    cardTeam.classList.toggle('mostrar-team')
}