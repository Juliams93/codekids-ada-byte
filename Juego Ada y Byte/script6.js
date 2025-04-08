function verificarAtaque() {
    const codigo = document.getElementById("codigoNull").value.trim(); 
    const respuesta = document.getElementById("respuestaNull");
    const btnFinal = document.getElementById("btnFinal");
    const sonido = document.getElementById("sonidoVictoria");

    const hechizoCorrecto = [
        "function ataqueFinal(poder)",
        "if (poder > 9000)",
        "return \"¡Null pierde energía!\"",
        "ataqueFinal(9001)"
    ].every(fragmento => codigo.includes(fragmento));

    if (hechizoCorrecto) {
        respuesta.innerHTML = '<span class="brillo">⚡ ¡Null ha sido derrotado! El código vuelve a fluir por el mundo.</span>';
        sonido.play();
        btnFinal.style.display = "inline-block";
    } else {
        respuesta.innerText = "😨 El hechizo no es lo suficientemente fuerte... ¿Probamos otra vez?";
    }
}

const canvas = document.querySelector(".matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        } else {
            drops[i]++;
        }
    });
}

setInterval(drawMatrix, 35);
