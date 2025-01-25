const btnPendiente = document.getElementById("pendiente");
const btnProgreso = document.getElementById("progreso");
const btnCompletada = document.getElementById("completada");

const formP = document.getElementById("formPendiente");
const formPr = document.getElementById("formProgreso");
const formC = document.getElementById("formCompletada");

const formI = document.getElementById("formIniciar");
const formR = document.getElementById("formRegistrar");


formP.addEventListener("submit", e =>{
    e.preventDefault();
    const titulo = document.getElementById("tituloP").value;
    const descripcion = document.getElementById("descripcionP").value;
    const imagen = document.getElementById("imagenP").value;
    const fechaInicio = document.getElementById("fechaInicioP").value;
    const fechaFinal = document.getElementById("fechaFinalizacionP").value;

    


    let tareaPendiente = {
        "id": "",
        "titulo": titulo,
        "descripcion": descripcion,
        "img": imagen,
        "fechaInicio": fechaInicio,
        "fechaFinal": fechaFinal
    }

    fetch("http://localhost:3000/tareasPendientes",{
        method: "POST",
        body: JSON.stringify(tareaPendiente),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json()).then(data => console.log(data))


})
let tPendiente = document.getElementById("tPendientes");

const dibujarPendiente = (elemHtml)=>{
    console.log("entro la funcion")
    fetch("http://localhost:3000/tareasPendientes").then(respuesta => respuesta.json()).then(data => data.forEach(tarea => {
        elemHtml.innerHTML += `<div class="div-pendiente">
        <h3>${tarea.titulo}</h3>
        <p>${tarea.descripcion}</p>
        <img src="${tarea.img}" alt="Imagen no agregada">
        <p>${tarea.fechaInicio}</p>
        <p>${tarea.fechaFinal}</p>
        <button class="btnAgregar eliminar">Eliminar<button>
    </div>` 
        console.log(tarea)
    }));


}

dibujarPendiente(tPendiente);

formPr.addEventListener("submit", e =>{
    e.preventDefault();
    const titulo = document.getElementById("tituloPr").value;
    const descripcion = document.getElementById("descripcionPr").value;
    const imagen = document.getElementById("imagenPr").value;
    const fechaInicio = document.getElementById("fechaInicioPr").value;
    const fechaFinal = document.getElementById("fechaFinalizacionPr").value;

    let tareaProgreso = {
        "id": "",
        "titulo": titulo,
        "descripcion": descripcion,
        "img": imagen,
        "fechaInicio": fechaInicio,
        "fechaFinal": fechaFinal
    }

    fetch("http://localhost:3000/tareasProgreso",{
        method: "POST",
        body: JSON.stringify(tareaProgreso),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json()).then(data => console.log(data))


})
let tProgreso = document.getElementById("tProgreso");

const dibujarProgreso = (elemHtml)=>{
    console.log("entro la funcion")
    fetch("http://localhost:3000/tareasProgreso").then(respuesta => respuesta.json()).then(data => data.forEach(tarea => {
        elemHtml.innerHTML += `<div class="div-pendiente">
        <h3>${tarea.titulo}</h3>
        <p>${tarea.descripcion}</p>
        <img src="${tarea.img}" alt="Imagen no agregada">
        <p>${tarea.fechaInicio}</p>
        <p>${tarea.fechaFinal}</p>
        <button class="btnAgregar eliminar">Eliminar<button>
    </div>` 
    }));


}

dibujarProgreso(tProgreso);


formC.addEventListener("submit", e =>{
    e.preventDefault();
    const titulo = document.getElementById("tituloC").value;
    const descripcion = document.getElementById("descripcionC").value;
    const imagen = document.getElementById("imagenC").value;
    const fechaInicio = document.getElementById("fechaInicioC").value;
    const fechaFinal = document.getElementById("fechaFinalizacionC").value;

    let tareaCompletada = {
        "id": "",
        "titulo": titulo,
        "descripcion": descripcion,
        "img": imagen,
        "fechaInicio": fechaInicio,
        "fechaFinal": fechaFinal
    }

    fetch("http://localhost:3000/tareasCompletadas",{
        method: "POST",
        body: JSON.stringify(tareaCompletada),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json()).then(data => console.log(data))


})
let tCompletada = document.getElementById("tCompletadas");

const dibujarCompletada = (elemHtml)=>{
    console.log("entro la funcion")
    fetch("http://localhost:3000/tareasCompletadas").then(respuesta => respuesta.json()).then(data => data.forEach((tarea,index) => {
        elemHtml.innerHTML += `<div class="div-pendiente completada ${index}">
        <h3>${tarea.titulo}</h3>
        <p>${tarea.descripcion}</p>
        <img src="${tarea.img}" alt="Imagen no agregada">
        <p>${tarea.fechaInicio}</p>
        <p>${tarea.fechaFinal}</p>
        <button class="btnAgregar eliminar">Eliminar<button>
    </div>` 
    console.log(index)
    }));


}

dibujarCompletada(tCompletada);

formI.addEventListener("submit", e =>{
    e.preventDefault();
    const usuarioI = document.getElementById("usuarioI").value;
    const contraseña = document.getElementById("contraseñaI").value;


    fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(data => data.forEach(usuarioS => {
        if(usuarioS.usuario == usuarioI && usuarioS.contraseña == contraseña){
            sessionStorage.setItem("usuario", usuarioI);
            location.reload();
            return alert("Bienvenido");
        }
    }
    ))
})

const invalida = () =>{
    if(sessionStorage.getItem("usuario")){
        console.log("Usuario no Registrado")
    }

    
}


formR.addEventListener("submit", e =>{
    e.preventDefault();
    const usuarioR = document.getElementById("usuarioR").value;
    const contraseña = document.getElementById("contraseñaR").value;

    let usuario = {
        "usuario": usuarioR,
        "contraseña": contraseña,
        "pendientes": [],
        "progreso": [],
        "completadas": []
    }

    fetch("http://localhost:3000/usuarios",{
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json()).then(data => console.log(data))


})

const limpiar = ()=>{
    if(sessionStorage.getItem("usuario")){
        console.log("tiene usuario")
    }

    console.log(sessionStorage.getItem("usuario"))
};

limpiar();

console.log("hola")