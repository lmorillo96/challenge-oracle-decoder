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

    return true;
}

// Errors 

//Input validation

function validateString(mensaje.value){
    array = mensaje.value.split('');
    var error = false;
    for(var i = 0; i < array.length; i++){
        if (array[i].codePointAt(0) != 32 && (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122) && (array[i].codePointAt(0) < 65 || array[i].codePointAt(0) > 90)){
            error = true;
            break;
        }
    }
    return error;
}

/* //Error message
function errorMsg() {
    var error = document.querySelector("#error");
    error.textContent = "Error. Ha ingresado un carácter inválido.";
} */