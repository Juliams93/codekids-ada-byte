function startGame() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    alert('¡Bienvenido a la aventura!');
}

function exitGame() {
    alert('Gracias por visitar Ada y Byte. ¡Hasta la próxima!');
}

const esperado = 'print("¡Hola, Ada!")';

function normalizar(cadena) {
    return cadena
        .toLowerCase()
        .replace(/[\s“”"']/g, '')
        .replace(/[^a-zA-Z0-9,()!]/g, '');
}

function checkCode() {
    const input = document.getElementById('codeInput').value.trim();
    const message = document.getElementById('message');
    const byteImage = document.getElementById('byteImage');
    const successSound = document.getElementById('successSound');
    const retryButton = document.getElementById('retryButton');
    const nextChapter = document.getElementById('nextChapter');

    if (normalizar(input) === normalizar(esperado)) {
        message.textContent = '¡Correcto! Byte está libre y listo para la aventura.';
        message.style.color = '#008000';
        byteImage.style.display = 'block';
        byteImage.classList.add('active');
        successSound.play();
        nextChapter.classList.add('visible');
    } else {
        message.textContent = 'Incorrecto. Intenta de nuevo.';
        message.style.color = '#FF0000';
        retryButton.style.display = 'inline-block';
    }
}

function retryCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('retryButton').style.display = 'none';
}

function goToChapter2() {
    window.location.href = "capitulo2.html";
}