//  TTD
var imgs_1 = {
   titulo:"AT&T",
   descripcion:
   "Proyecto hecho con html, css y javascript para planes de telefonia de AT&T. Gracias al equipo de diseño con el que trabajaba logre una interfaz bastante agradable para el usuario.",
   lenguajes:["html","css","js"],
   imagen1: "content/webmaster2/img/pages/ttd/ttd1.png",
   imagen2: "content/webmaster2/img/pages/ttd/ttd2.png",
   imagen3: "content/webmaster2/img/pages/ttd/ttd3.png",
   imagen4: "content/webmaster2/img/pages/ttd/ttd4.png"
 };

//  DASHAUS

 var imgs_2 = {
   titulo:"Dashaus",
   descripcion:
   "Proyecto hecho con html, css y javascript para una compañia de cotos, se usaron drones para tomar fotos panoramicas para la pagina web. ",
   lenguajes:["html","css","js"],
   imagen1: "content/webmaster2/img/pages/dashaus/das1.png",
   imagen2: "content/webmaster2/img/pages/dashaus/das2.png",
   imagen3: "content/webmaster2/img/pages/dashaus/das3.png",
   imagen4: "content/webmaster2/img/pages/dashaus/das4.png"
 };

//  GIGAHARDWARE

 var imgs_3 = {
   titulo:"Gigahardware",
   descripcion:
   "Proyecto hecho con Angular y C# con una arquitectura cliente - servidor para una empresa de venta de componentes electrónicos.",
   lenguajes:["html","css","angular","c#"],
   imagen1: "content/webmaster2/img/pages/giga/giga1.png",
   imagen2: "content/webmaster2/img/pages/giga/giga2.png",
   imagen3: "content/webmaster2/img/pages/giga/giga3.png",
   imagen4: "content/webmaster2/img/pages/giga/giga4.png"
 };

//  ECAR

 var imgs_4 = {
   titulo:"E-car",
   descripcion:
   "Proyecto hecho con html, css, php y javascript para una confeccionaria de unifromes que necesitaba una plataforma donde hacer pedidos de sus uniformes y bordados.",
   lenguajes:["html","css","js","php"],
   imagen1: "content/webmaster2/img/pages/ecar/ecar1.png",
   imagen2: "content/webmaster2/img/pages/ecar/ecar2.png",
   imagen3: "content/webmaster2/img/pages/ecar/ecar3.png",
   imagen4: "content/webmaster2/img/pages/ecar/ecar4.png"
 };

//  LASNUBES

 var imgs_4 = {
   titulo:"Las nubes",
   descripcion:
   "Proyecto hecho con html css y javascript para una reposteria que queria una pagina web donde consultar el menu.",
   lenguajes:["html","css","js"],
   imagen1: "content/webmaster2/img/pages/lasnubes/nubes1.png",
   imagen2: "content/webmaster2/img/pages/lasnubes/nubes2.png",
   imagen3: "content/webmaster2/img/pages/lasnubes/nubes3.png",
   imagen4: "content/webmaster2/img/pages/lasnubes/nubes4.png"
 };

//  SANORT

 var imgs_5 = {
   titulo:"Sanort",
   descripcion:
   "Proyecto hecho con Angular y C# para una distribuidora farmaceutica que queria una plataforma para realizar compras de medicamento al mayoreo.",
   lenguajes:["html","css","ts","angular","c#"],
   imagen1: "content/webmaster2/img/pages/sanort/sanort1.png",
   imagen2: "content/webmaster2/img/pages/sanort/sanort2.png",
   imagen3: "content/webmaster2/img/pages/sanort/sanort3.png",
   imagen4: "content/webmaster2/img/pages/sanort/sanort4.png"
 };

//  MAGNOS

 var imgs_6 = {
   titulo:"Magno's Pizza",
   descripcion:
   "Proyecto hecho con HTML CSS y Javascript para un retsaurante de comida rapida para realizar pedidos por internet.",
   lenguajes:["html","css","js"],
   
   imagen1: "content/webmaster2/img/pages/magnos/magnos1.png",
   imagen2: "content/webmaster2/img/pages/magnos/magnos2.png",
   imagen3: "content/webmaster2/img/pages/magnos/magnos3.png",
   imagen4: "content/webmaster2/img/pages/magnos/magnos4.png"
 };


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');

img1.src = imgs_1.imagen1;
img2.src = imgs_1.imagen2;
img3.src = imgs_1.imagen3;
img4.src = imgs_1.imagen4;







 // Función para mostrar SweetAlert con el grid de imágenes
 function mostrarCalculadora() {
    // Contenido del grid
    const gridContent = `
       <div class="flex-col-c h-100 mh ">
            <img onclick='cambiarImagenes(1)' class="ico" src="content/webmaster2/img/icons/att.png" onclick="seleccionarImagen('imagen1.jpg')">
            <img onclick='cambiarImagenes(2)' class="ico" src="content/webmaster2/img/icons/dasHausLogo.png" onclick="seleccionarImagen('imagen2.jpg')">
            <img onclick='cambiarImagenes(3)' class="ico" src="content/webmaster2/img/icons/giga.png" onclick="seleccionarImagen('imagen3.jpg')">
            <img onclick='cambiarImagenes(4)' class="ico" src="content/webmaster2/img/icons/lanube.png" onclick="seleccionarImagen('imagen3.jpg')">
            <img onclick='cambiarImagenes(5)' class="ico" src="content/webmaster2/img/icons/sanort.png" onclick="seleccionarImagen('imagen3.jpg')">
            <img onclick='cambiarImagenes(6)' class="ico" src="content/webmaster2/img/icons/magnos.png" onclick="seleccionarImagen('imagen3.jpg')">


        </div>
    `;

    // Mostrar SweetAlert con el grid de imágenes
    Swal.fire({
       title: 'Select a project',
       html: gridContent,
       showCloseButton: true,
       showConfirmButton: false,
    });
 }

 // Función para manejar la selección de imágenes y cerrar el SweetAlert
 function seleccionarImagen(imagen) {
    // Puedes realizar acciones con la imagen seleccionada aquí
    console.log('Imagen seleccionada:', imagen);
    
    // Cerrar SweetAlert
    Swal.close();
 }







 function cambiarImagenes(opcion) {
   // Obtener referencias a las imágenes por sus IDs
   var img1 = document.getElementById('img1');
   var img2 = document.getElementById('img2');
   var img3 = document.getElementById('img3');
   var img4 = document.getElementById('img4');

   // Utilizar un switch para seleccionar las imágenes según la opción
   switch (opcion) {
     case 1:
       img1.src = imgs_1.imagen1;
       img2.src = imgs_1.imagen2;
       img3.src = imgs_1.imagen3;
       img4.src = imgs_1.imagen4;
       break;
     case 2:
       img1.src = imgs_2.imagen1;
       img2.src = imgs_2.imagen2;
       img3.src = imgs_2.imagen3;
       img4.src = imgs_2.imagen4;
       break;
      case 3:
       img1.src = imgs_3.imagen1;
       img2.src = imgs_3.imagen2;
       img3.src = imgs_3.imagen3;
       img4.src = imgs_3.imagen4;
       break;
      case 4:
       img1.src = imgs_4.imagen1;
       img2.src = imgs_4.imagen2;
       img3.src = imgs_4.imagen3;
       img4.src = imgs_4.imagen4;
       break;
      case 5:
       img1.src = imgs_5.imagen1;
       img2.src = imgs_5.imagen2;
       img3.src = imgs_5.imagen3;
       img4.src = imgs_5.imagen4;
       break;
      case 6:
       img1.src = imgs_6.imagen1;
       img2.src = imgs_6.imagen2;
       img3.src = imgs_6.imagen3;
       img4.src = imgs_6.imagen4;
       break;
     default:
       console.log("Opción no válida");
   }
   Swal.close();
 }



//  Colocar titulo

function cambiarTitulo(){
   document.getElementById("titulo");


}


// Colocar descripción

function cambiarDescripción(){
   document.getElementById("descripcion");
   
}

// Colocar lenguajes

function colocarLengujes(idProy){
   var lengs = document.getElementById("flex-lengs");
   var div = document.createElement("div");

   switch(idProy){
      case "html":{
          div.classList("html");
          div.appendChild(
            document.createTextNode("Html"));
          lengs.appendChild(div);
         break;
      }
      case "css":{
         div.classList("css");
         div.appendChild(
            document.createTextNode("Css"));
          lengs.appendChild(div);
         break;
      }
      case "js":{
         div.classList("js");
         div.appendChild(
            document.createTextNode("Javascript"));
          lengs.appendChild(div);
         break;
      }
      case "php":{
         div.classList("php");
         div.appendChild(
            document.createTextNode("php"));
          lengs.appendChild(div);
         break;
      }
      case "angular":{
         div.classList("angular");
         div.appendChild(
            document.createTextNode("Angular"));
          lengs.appendChild(div);
         break;
      }
      case "react":{
         div.classList("react");
         div.appendChild(
            document.createTextNode("React"));
          lengs.appendChild(div);
         break;
      }
      case "php":{
         div.classList("php");
         div.appendChild(
            document.createTextNode("php"));
          lengs.appendChild(div);
         break;
      }
      case "c#":{
         div.classList("csharp");
         div.appendChild(
            document.createTextNode("C#"));
          lengs.appendChild(div);
         break;
      }
      case "nodejs":{
         div.classList("nodejs");
         div.appendChild(
            document.createTextNode("NodeJs"));
          lengs.appendChild(div);
         break;
      }
      case "typescript":{
         div.classList("ts");
         div.appendChild(
            document.createTextNode("Typescript"));
          lengs.appendChild(div);
         break;
      }
      case "firebase":{
         div.classList("firebase");
         div.appendChild(
            document.createTextNode("html"));
          lengs.appendChild(div);
         break;
      }
      case "mysql":{
         div.classList("mysql");
         div.appendChild(
            document.createTextNode("html"));
          lengs.appendChild(div);
         break;
      }
      case "mongodb":{
         div.classList("mongodb");
         div.appendChild(
            document.createTextNode("html"));
          lengs.appendChild(div);
         break;
      }
      case "kotlin":{
         div.classList("kotlin");
         div.appendChild(
            document.createTextNode("html"));
          lengs.appendChild(div);
         break;
      }


   }
   
}
