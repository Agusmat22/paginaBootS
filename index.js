function enviarMensaje()
{
    let nombre;
    let email;
    let dni;
    let comentario;
    let mensaje;

    //nombre
    nombre = document.getElementById("floatingInput").value;
    //email
    email = document.getElementById("floatingInputDisabled").value;
    //dni
    dni = document.getElementById("floatingTextarea").value;
    //consulta
    comentario = document.getElementById("floatingTextarea2").value;

    if(nombre == "" || email == "" || dni == "" || comentario == "")
    {
        mensaje = "Le falto completar un recuadro, vuelva a internarlo"
    }
    else
    {
        mensaje = "Muchas gracias por completar el formulario, a la brevedad se contactarn con usted"
    }

    alert(mensaje);
   
    //con este elemento actualizamos la pagina
    location.reload(true);
    

}
