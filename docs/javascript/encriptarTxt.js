var btnEncriptar = document.querySelector("#btnEncriptar");
var txtEncriptar = document.querySelector("#txtEncriptar");

btnEncriptar.addEventListener("click", function () {
  var texto = txtEncriptar.value;
  var encriptando = "";

  if (txtEncriptar.value.length == 0) {
      alert("Debes ingresar el texto a encriptar");
      return; 
  }


  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        encriptando = encriptando + texto[i] + "i";
        break;
      case "e":
        encriptando = encriptando + texto[i] + "nter";
        break;
      case "i":
        encriptando = encriptando + texto[i] + "mes";
        break;
      case "o":
        encriptando = encriptando + texto[i] + "ber";
        break;
      case "u":
        encriptando = encriptando + texto[i] + "fat";
        break;
      default:
        encriptando = encriptando + texto[i];
        break;
    }
  }
  console.log("el texto es: " + encriptando);
  var txtEncriptado = document.querySelector("#textoEncriptado");
  txtEncriptado.value = encriptando;
  document.getElementById("rectangulo").style.display = "none";
  document.getElementById("rectanguloEncriptado").style.display = "block";
});

function checkEntrada(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      if (charCode != 32) evt.preventDefault();
    }
  }
}
