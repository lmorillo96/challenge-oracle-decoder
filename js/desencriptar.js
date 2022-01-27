let desencriptar = document.querySelector('#btn-desencriptar');

let msgEncriptado = "";
let msgValue = "";

let reglas2 = {
    "enter" : "e",
    "imes" : "i",
    "ai" : "a",
    "ober" : "o",
    "ufat" : "u",
}

desencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    mensajeEncriptado.value = msgEncriptado;
    msgValue = mensaje.value;
    msgEncriptado = decryptPhrase();
    
    if (validarDecrypt() == true) { 
        decryptPhrase();
        msgValue = "";
    } else {
        mensajeEncriptado.innerHTML = "";
        mensaje.innerHTML = "";
    }
})


function decryptPhrase () {
    for(let i = 0; i < Object.keys(reglas2).length; i++) {
        while(msgValue.indexOf(Object.keys(reglas2)[i]) > -1){
            msgValue = msgValue.replace(Object.keys(reglas2)[i],reglas2[Object.keys(reglas2)[i]]);
        }
    }
    return msgValue;
}