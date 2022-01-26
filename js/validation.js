function validarEncrypt() {
    if (mensaje.value == ""){
       alert("I told you, write something")
    }

   if (mensaje.value != mensaje.value.toLowerCase()) {
       alert("Without Mayus");
       mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
    }
}

function validarDencrypt() {
    if (mensaje.value == ""){
        alert("Dude pls, you can't decrypt a Anything")
    }

    if (mensaje.value != mensaje.value.toLowerCase()) {
        alert("Without Mayus");
        mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
    }
}
