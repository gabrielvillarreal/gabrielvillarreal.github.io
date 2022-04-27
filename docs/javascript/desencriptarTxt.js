var btnDesencriptar = document.querySelector("#btnDesencriptar");
var txtEncriptar = document.querySelector("#txtEncriptar");

btnDesencriptar.addEventListener("click", function () {
  var texto = txtEncriptar.value;
  var desencriptando = "";

  if (txtEncriptar.value.length == 0) {
    alert("Debes ingresar el texto a desencriptar");
    return; 
  }

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        desencriptando = desencriptando + texto[i];
        i++;
        break;
      case "e":
        desencriptando = desencriptando + texto[i];
        i = i + 4;
        break;
      case "i":
        desencriptando = desencriptando + texto[i];
        i = i + 3;
        break;
      case "o":
        desencriptando = desencriptando + texto[i];
        i = i + 3;
        break;
      case "u":
        desencriptando = desencriptando + texto[i];
        i = i + 3;
        break;
      default:
        desencriptando = desencriptando + texto[i];
        break;
    }
  }
  var txtEncriptado = document.querySelector("#textoEncriptado");
  txtEncriptado.value = desencriptando;
  document.getElementById("rectangulo").style.display = "none";
  document.getElementById("rectanguloEncriptado").style.display = "block";
});
