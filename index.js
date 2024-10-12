const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selecionarCompras = document.querySelectorAll("#no option:checked");
  const opcaoMarcada = document.querySelectorAll("#yes option");

  yesSelect.replaceChildren(...selecionarCompras, ...opcaoMarcada);
});

noBtn.addEventListener("click", () => {
  const selecionarCompras = document.querySelectorAll("#yes option:checked");
  const opcaoMarcada = document.querySelectorAll("#no option");

  noSelect.replaceChildren(...selecionarCompras, ...opcaoMarcada);
});
