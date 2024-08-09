const texto = document.getElementById("texto");

texto.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

function encriptar() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector(".encriptado__img").style.display = "none";
  document.getElementById("titulo__encriptado").style.display = "none";
  document.getElementById("texto__encriptado").innerText = textoEncriptado;
  document.getElementById("btn__copiar").style.display = "block";
}

function desencriptar() {
  let textoEncriptado;
  if (document.getElementById("texto").value.trim() !== "") {
    textoEncriptado = document.getElementById("texto").value.toLowerCase();
  } else {
    textoEncriptado = document.getElementById("texto__encriptado").innerText.toLowerCase();
  }
  let textoDesencriptado = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("texto__encriptado").innerText = textoDesencriptado;
  document.querySelector(".encriptado__img").style.display = "none";
  document.getElementById("titulo__encriptado").style.display = "none";
  document.getElementById("btn__copiar").style.display = "block";
}

function copiar() {
  let textoEncriptado = document.getElementById("texto__encriptado").innerText;
  let mensajeCopiado = document.getElementById("mensajeCopiado");
  navigator.clipboard
    .writeText(textoEncriptado)
    .then(() => {
      mensajeCopiado.style.display = "block";
      setTimeout(() => {
        mensajeCopiado.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
