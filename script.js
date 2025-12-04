const input = document.getElementById('input-tarea')
const boton = document.getElementById('btn-agregar')
const lista = document.getElementById('lista-tareas')
const btnBorrarTodo = document.getElementById('btn-borrar-todo')

cargarDatos()
boton.addEventListener('click', agregarTarea)

input.addEventListener('keypress', function(evento) {
    if (evento.key == 'Enter') {
        agregarTarea()
    }
})

btnBorrarTodo.addEventListener('click', function() {

    if (lista.children.length === 0) {
        return
    }
    const confirmacion = confirm("¿Estas seguro que deseas borrar todas las tareas?")

    if (confirmacion) {
        lista.innerHTML = ''
        localStorage.removeItem('misTareas')
    }
})


function agregarTarea() {
    const textoUsuario = input.value 

    if (textoUsuario === '') {
        alert("Por favor escriba una tarea")
        return
    } else {
        
    }

    crearTarea(textoUsuario)
    input.value = ""
 
}

function crearTarea(textoUsuario) {
   //Tarea
    const nuevaTarea = document.createElement('li')
    nuevaTarea.textContent = textoUsuario 

    nuevaTarea.addEventListener('click', function() {
        nuevaTarea.classList.toggle('tarea-seleccionada')
    })

    //Boton
    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = "X" 
    botonBorrar.classList.add('btn-borrar') 

    botonBorrar.addEventListener('click', function() {
        lista.removeChild(nuevaTarea)
        guardarDatos()
        
    })

    //Agregamos el boton y la tarea 
    nuevaTarea.appendChild(botonBorrar)
    lista.appendChild(nuevaTarea) 
    guardarDatos()

    
}

function guardarDatos() {
    const tareasArr = [];
    const tareasHTML = document.querySelectorAll('li') //Selecciona los elementos 'li'

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
            crearTarea(textoTarea)
        })
    }
}
