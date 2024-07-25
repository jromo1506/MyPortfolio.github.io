function enviarMensajeWhatsapp() {
    var nombre=document.getElementById("name").value;
   var email = document.getElementById("email").value;
    var subject= document.getElementById("subjects").value;
    var body = document.getElementById("bodys").value;

    console.log(nombre + email + subject + body);
   

    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(4995494260) + "&text=" + encodeURIComponent(body);

    // Abre la ventana de WhatsApp
    window.open(url);
}

