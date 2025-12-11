# To-Do List App 

Una aplicación web de gestión de tareas rápida y persistente, desarrollada con JavaScript Vanilla (sin frameworks). Permite organizar tareas diarias y mantiene el estado de las mismas incluso después de recargar la página.

##  Características (Novedades)

- **Persistencia de Datos Inteligente:** Uso de `localStorage` para guardar no solo las tareas, sino su estado (completada/pendiente).
- **Interfaz Renovada:** Diseño moderno utilizando **CSS Grid** para una distribución responsiva (Sidebar + Panel de tareas).
- **Tipografía:** Integración de la fuente 'Sora' para mejor legibilidad.
- **Feedback Visual:** Tachado automático de tareas al marcar el checkbox.

##  Tecnologías Usadas

- **HTML5:** Estructura semántica.
- **CSS3:** Variables, Grid Layout, y Flexbox.
- **JavaScript (ES6):** Manipulación del DOM y lógica de estado.

##  Cómo funciona la lógica (Technical Deep Dive)

Recientemente se refactorizó el sistema de guardado. Originalmente se guardaba un array simple de strings. Ahora, para soportar el estado de los checkboxes, se implementó un **Array de Objetos**.

**Estructura de datos en LocalStorage:**

```json
[
  {
    "texto": "Aprender JavaScript",
    "realizada": true
  },
  {
    "texto": "Hacer commit de los cambios",
    "realizada": false
  }
]

