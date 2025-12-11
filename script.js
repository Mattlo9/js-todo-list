const input = document.getElementById('input-tarea')
const lista = document.getElementById('lista-tareas')

cargarDatos()
input.addEventListener('keypress', function (evento) {
    if (evento.key == 'Enter') {
        agregarTarea()
    }
})

function agregarTarea() {
    const textoUsuario = input.value

    if (textoUsuario === '') {
        alert("Por favor escriba una tarea")
        return
    }
    crearTarea(textoUsuario)
    guardarDatos()
    input.value = ""
}

function crearTarea(textoUsuario, estaRealizada = false) {
    const nuevaTarea = document.createElement('li')

    const casilla = document.createElement('input')
    casilla.type = 'checkbox'
    casilla.checked = estaRealizada


    const texto = document.createElement('span')
    texto.textContent = textoUsuario

    if (estaRealizada) {
        texto.style.textDecoration = 'line-through'
    }


    nuevaTarea.appendChild(casilla)
    nuevaTarea.appendChild(texto)

    casilla.addEventListener('change', function (){
        if (casilla.checked) {
            texto.style.textDecoration = 'line-through'
        } else {
            texto.style.textDecoration = 'none'
        }
        guardarDatos()
    })

    texto.classList.add('texto-tarea')
    nuevaTarea.classList.add('tarea')
    lista.appendChild(nuevaTarea)
}

function guardarDatos() {
    const listaTareas = document.querySelectorAll('.tarea')
    const tareasArray = []
    listaTareas.forEach(tarea => {
        const texto = tarea.querySelector('span').textContent
        const estaMarcada = tarea.querySelector('input').checked
        tareasArray.push({
            texto: texto,
            estaMarcada: estaMarcada
        })
    })
    localStorage.setItem('tareas', JSON.stringify(tareasArray))
}

function cargarDatos() {
    const tareasGuardadas = localStorage.getItem('tareas')
    if (tareasGuardadas) {
        const tareasArray = JSON.parse(tareasGuardadas)
        tareasArray.forEach(tarea => {
            crearTarea(tarea.texto,tarea.estaMarcada)
        })
    }
}