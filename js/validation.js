let validador = true;

function validarEncrypt() {

    if (mensaje.value == ""){
        alert("I told you, write something");
        return false;
    }

    if (mensaje.value != mensaje.value.toLowerCase())  {
        alert("Without Mayus");
        mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
        return false;
    }

    if (mensaje.value = "-") {
        alert("Whithout special Characters")
        mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
        return false;
    }
    
    return true;
}

function validarDecrypt() {
    if (mensaje.value == ""){
        alert("Dude pls, you can't decrypt a Anything");
        return false;
    }

    if (mensaje.value != mensaje.value.toLowerCase()) {
        alert("Without Mayus");
        mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
        return false;
    }

    if (mensaje.value = "-") {
        alert("Whithout special Characters")
        mensajeEncriptado.value = mensajeEncriptado.innerHTML = "";
        return false;
    }

    return true;
}
