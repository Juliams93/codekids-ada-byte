function verificarCodigo() {
    const input = document.getElementById("codigoInput").value.trim();
    const mensaje = document.getElementById("mensaje");
    const img = document.getElementById("laberintoImg");
    const btnSiguiente = document.getElementById("siguiente");
    const sonido = document.getElementById("sonidoExito");

    const regex = /^nombreSecreto\s*=\s*["'](.+)["']\s*[\n\r;]*print\(\s*nombreSecreto\s*\)$/i;
    const match = input.match(regex);

    if (match) {
      const nombre = match[1];
      mensaje.innerHTML = `✨ ¡Lo lograste, <strong>${nombre}</strong>!<br>El laberinto se abre ante ti y una luz antigua ilumina el camino.`;
      mensaje.style.textAlign = "center";
      img.style.display = "block";
      img.src = "Imagenes/Ada y Byte (11).png";
      img.style.margin = "20px auto";
      img.style.display = "block";
      sonido.play();
      btnSiguiente.style.display = "inline-block";
      btnSiguiente.style.margin = "20px auto";
    } else {
      mensaje.innerHTML = "🧩 Revisa tu código: ¿Escribiste <code>nombreSecreto</code> entre comillas y lo imprimiste con <code>print(nombreSecreto)</code>?";
      mensaje.style.textAlign = "center";
      img.style.display = "none";
      btnSiguiente.style.display = "none";
    }
  }

  function reiniciar() {
    document.getElementById("codigoInput").value = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("laberintoImg").style.display = "none";
    document.getElementById("siguiente").style.display = "none";
  }

  function irAlCapitulo3() {
    window.location.href = "capitulo3.html";
  }