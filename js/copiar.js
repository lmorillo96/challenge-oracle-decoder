let btnCopy = document.querySelector('#btn-copy');

// Llamar a la función que copiará el texto encriptado.

btnCopy.addEventListener('click', () => {
    copiarTexto();
})

function copiarTexto() {
    navigator.clipboard.writeText(mensajeEncriptado.value).then(function() {
        alert("Mensaje Copiado");
    });
}