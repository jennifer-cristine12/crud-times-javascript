//seletores
const novoCancelar = document.querySelector("#new");
const form = document.querySelector("form");
const cadastrar = document.querySelector("#criar");
const tbody = document.querySelector("tbody");
//eventos
novoCancelar.addEventListener("click", () => {
  tog();
});
cadastrar.addEventListener("click", () => {
  novo();
});
//funcoes
function novo() {
  const data = document.createElement("tr");
  data.innerHTML = `
<td>08/02/2024 17:01</td>
<td>Campeões da fiel</td>
<td class="optTd">
  <button class="opt" class="editar">
    <i class="fa-solid fa-pen"></i>
  </button>
  <button class="opt" class="remover">
    <i class="fa-solid fa-trash"></i>
  </button>
</td>
`;
  tbody.appendChild(data);
}
function tog() {
  //mostra e esconde o formulario
  form.classList.toggle("hide");
  form.classList.contains("hide")
    ? (novoCancelar.textContent = "Novo time")
    : (novoCancelar.textContent = "Cancelar");
}
