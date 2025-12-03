const input = document.getElementById('input-tarea')
const boton = document.getElementById('btn-agregar')
const lista = document.getElementById('lista-tareas')

function agregarTarea() {
    const textoUsuario = input.value

    if (textoUsuario === '') {
        alert("Por favor escriba una tarea")
        return
    }

    const nuevaTarea = document.createElement('li')
    nuevaTarea.textContent = textoUsuario

    nuevaTarea.addEventListener('click', function() {
        nuevaTarea.classList.toggle('tarea-seleccionada')
    })

    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = "X"
    botonBorrar.classList.add('btn-borrar')

    botonBorrar.addEventListener('click', function() {
        lista.removeChild(nuevaTarea)
    })

    nuevaTarea.appendChild(botonBorrar)
    lista.appendChild(nuevaTarea)

    input.value = ""

}

boton.addEventListener('click', agregarTarea)

input.addEventListener('keypress', function(evento) {
    if (evento.key == 'Enter') {
        agregarTarea()
    }
})