function clipboard() {
  const copiarTexto = document.querySelector("#textoEncriptado");
  navigator.clipboard.writeText(copiarTexto.value);
  console.log(copiarTexto.value);
}
const copy = document.querySelector(".botonCopiar");
copy.addEventListener("click", function () {
  clipboard();
});
