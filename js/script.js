//seletores
const novoCancelar = document.querySelector("#new");
const form = document.querySelector("div");
const cadastrar = document.querySelector("#criar");
const tbody = document.querySelector("tbody");
const btnExcluir = document.querySelectorAll(".remover");
const inputNome = document.querySelector("#Nome");
const inputData = document.querySelector("#Data");
const btnEditar = document.querySelectorAll(".editar");
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
<td>${inputData.value}</td>
<td>${inputNome.value}</td>
<td class="optTd">
  <button class="opt" class="editar" onClick="editar(this)">
    <i class="fa-solid fa-pen"></i>
  </button>
  <button class="opt" class="remover" onClick="remover(event)">
    <i class="fa-solid fa-trash"></i>
  </button>
</td>
`;
  tbody.appendChild(data);

  inputData.value = "";
  inputNome.value = "";
  inputNome.focus();
}
function remover(event) {
  const targetEl = event.target;
  const parentEl = targetEl.closest("tr");
  parentEl.remove();
}
function tog() {
  //mostra e esconde o formulario
  form.classList.toggle("hide");
  form.classList.contains("hide")
    ? (novoCancelar.textContent = "Novo time")
    : (novoCancelar.textContent = "Cancelar");
}
function editar(button) {
  //altera o nome do time
  const row = button.closest("tr"); //assim como o remove, ele pega o elemento de linha mais proximo
  const cells = row.querySelectorAll("td"); //pega a celula mais proxima
  const nameCell = cells[1]; //pega o nome
  const dataCell = cells[0]; //pega a data
  const nameInput = document.createElement("input");

  const dataInput = document.createElement("input"); //cria um input por cima da celula
  nameInput.type = "text"; //tipo de input
  dataInput.type = "date";
  nameInput.value = nameCell.textContent;
  dataInput.value = dataCell.textContent; //coloca o valor do input para o nome
  nameCell.textContent = "";
  dataCell.textContent = "";
  dataCell.appendChild(dataInput);
  nameCell.appendChild(nameInput);
  nameInput.focus();
  dataInput.focus();

  nameInput.addEventListener("blur", () => {
    //quando tirar o foco, o nome volta ao normal(sem input)
    nameCell.textContent = nameInput.value;

    dataCell.textContent = dataInput.value;
  });
}
