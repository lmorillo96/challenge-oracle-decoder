let btnCopy = document.querySelector('#btn-copy');

btnCopy.addEventListener('click', () => {
    copiarTexto();
})

function copiarTexto() {
    navigator.clipboard.writeText(mensajeEncriptado.value).then(function() {
        alert("Mensaje Copiado");
    });
}