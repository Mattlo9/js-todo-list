const input = document.getElementById('input-tarea')
const boton = document.getElementById('btn-agregar')
const lista = document.getElementById('lista-tareas')

function agregarTarea() {
    const textoUsuario = input.value //Esto es para obtener la informacion del input

    //Validacion
    if (textoUsuario === '') {
        alert("Por favor escriba una tarea")
        return
    }


    //Creamos el elemento (Aun no se pone dentro del Ul)
    const nuevaTarea = document.createElement('li')
    nuevaTarea.textContent = textoUsuario // Lo llenamos con la informacion del usuario

    //Aplica la clase .tarea-seleccionada cuando se hace click a la tarea
    nuevaTarea.addEventListener('click', function() {
        nuevaTarea.classList.toggle('tarea-seleccionada')
    })

    //Se crea el elemento boton
    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = "X" //Se le agrega la X
    botonBorrar.classList.add('btn-borrar') //Se le agrega la clase para los estilos

    //Si se le da click al botonBorrar, se elimina el li
    botonBorrar.addEventListener('click', function() {
        lista.removeChild(nuevaTarea)
        guardarDatos()
    })

    //Se agrega el boton borrar dentro del li
    nuevaTarea.appendChild(botonBorrar)
    lista.appendChild(nuevaTarea) //Se agrega el li al ul
    guardarDatos()

    input.value = ""

}

function guardarDatos() {
    const tareasArr = [];
    const tareasHTML = document.querySelectorAll('li')

    tareasHTML.forEach(function(tareaHTML) {
        tareasArr.push(tareaHTML.firstChild.textContent)
    })

    localStorage.setItem('misTareas', JSON.stringify(tareasArr))
}

function cargarDatos() {
    const tareasGuardadas = localStorage.getItem('misTareas')
    if (tareasGuardadas) {
        const tareasArr = JSON.parse(tareasGuardadas)

        tareasArr.forEach(function(textoTarea) {
            const nuevaTarea = document.createElement('li')
            nuevaTarea.textContent = textoTarea;

            const botonBorrar = document.createElement('button')
            botonBorrar.innerHTML = 'X'
            botonBorrar.classList.add('btn-borrar')

            botonBorrar.addEventListener('click', function() {
                lista.removeChild(nuevaTarea)
                guardarDatos()
            })
            nuevaTarea.appendChild(botonBorrar)
            lista.appendChild(nuevaTarea)
        })
    }
}

cargarDatos()
boton.addEventListener('click', agregarTarea)

input.addEventListener('keypress', function(evento) {
    if (evento.key == 'Enter') {
        agregarTarea()
    }
})