const cantidadTareas = document.querySelector("#resumen")
const cantidadCompletas =document.querySelector("#realizadas")
const tareaIngreso = document.querySelector("#nuevoTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tbody = document.querySelector("tbody");


const tareas = [
    {id: getRandomInt(100), nombre: "Desayunar", completado: true},
    {id: getRandomInt(100), nombre: "Bañarse",completado: true},
    {id: getRandomInt(100), nombre: "Estudiar", completado: false}
]

var idNumero = 0
var tareaCompleta 
function render(){
    let html = ""
for (tarea of tareas) {
if(tarea.completado == false){
    var tareaCompleta = "<div style='background-color: red; color: white;'>  Sin completar </div>"
}else{
    var tareaCompleta = "<div style='background-color: green; color: white;'>  Completado </div>"
}
html += `
<tr>
<td>${tarea.id}</td>
<td>${tarea.nombre}</td>
<td>${tareaCompleta}</td>
<td><button onclick="cambiar(${tarea.id})"> Cambiar estado </button></td>
<td><button id="delete" onclick="borrar(${tarea.id})"> Eliminar </button></td>
</tr>`;
}
tbody.innerHTML = html;
cantidadTareas.textContent = `Total: ${tareas.length}`;
var tareasCompletadas =
tareas.filter( tarea => tarea.completado == true )
cantidadCompletas.textContent =`Realizadas: ${tareasCompletadas.length}`;
}
render();
btnAgregar.addEventListener("click", () => {

const nombreTarea = tareaIngreso.value
tareas.push({id: idNumero = getRandomInt(100), nombre: nombreTarea, completado: false})
tareaIngreso.value = ""
render();
})

function borrar(id){
const index = tareas.findIndex((ele) => ele.id == id)
tareas.splice(index, 1)
render();
}

function cambiar(id){
const index = tareas.find(tarea => tarea.id == id)
if(index.completado == false){
index.completado = true;}
else{
    index.completado = false;
}
render();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }