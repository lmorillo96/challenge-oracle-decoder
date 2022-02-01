let desencriptar = document.querySelector('#btn-desencriptar');
let msgEncriptado = "";
let msgValue = "";

// Objeto para desencriptar palabras

let reglas2 = {
    "enter" : "e",
    "imes" : "i",
    "ai" : "a",
    "ober" : "o",
    "ufat" : "u",
}

// Evento para llamar la función desencriptar mediante un click.

desencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(!validateString(mensaje.value)){
        mensajeEncriptado.value = decryptPhrase(mensaje.value);
    }else{
        alert("Read the instructions, pls!");
    }
})

// Función desencriptar frase.

function decryptPhrase (phrase) {
    for(let i = 0; i < Object.keys(reglas2).length; i++) {
        while(phrase.indexOf(Object.keys(reglas2)[i]) > -1){
            phrase = phrase.replace(Object.keys(reglas2)[i],reglas2[Object.keys(reglas2)[i]]);
        }
    }
    return phrase;
}