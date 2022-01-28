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
    
    if(!validateString(mensaje.value)){
        mensajeEncriptado.value = decryptPhrase(mensaje.value);
    }else{
        alert("Read the instructions, pls!");
    }
})


function decryptPhrase (phrase) {
    for(let i = 0; i < Object.keys(reglas2).length; i++) {
        while(phrase.indexOf(Object.keys(reglas2)[i]) > -1){
            phrase = phrase.replace(Object.keys(reglas2)[i],reglas2[Object.keys(reglas2)[i]]);
        }
    }
    return phrase;
}