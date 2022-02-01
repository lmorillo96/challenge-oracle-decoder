let mensaje = document.querySelector('#input-texto');
let encriptar = document.querySelector('#btn-encriptar');
let mensajeEncriptado = document.querySelector('#msg');

// Objeto con reglas del texto

let reglas = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat",
}

// Evento para llamar a la función una vez se le da click al botón de encriptar.

encriptar.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(!validateString(mensaje.value)){
        mensajeEncriptado.value = encryptPhrase();
    }else{
        alert("Read the instructions, pls!");
    }
});

// Función para enctiptar texto

function encryptPhrase() {

    let testArray = mensaje.value.split('');
    let arr2 = [];

    for(let i = 0; i < testArray.length; i++){
        for(let j = 0; j < Object.keys(reglas).length; j++){
            if(testArray[i] == Object.keys(reglas)[j]){
                arr2[i] = reglas[Object.keys(reglas)[j]];
            } else {
                if(arr2[i] == undefined)
                    arr2[i] = testArray[i];
            }
        }
    }

    return arr2.join('');
}

