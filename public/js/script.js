const form = document.querySelector("#add-form");
const newItem = document.querySelector("#new-item");
const list = document.querySelector("#list");
const removedAlert = document.querySelector("#alert");

// Estou usando o evento submit do formulário, assim evito precisar pegar o click e depois o apertar do enter
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Criar constante para pegar o valor sem espaços
  const inputText = newItem.value.trim();
  // Testar se o valor não está em branco
  if (inputText === "") {
    return;
  }

  // Criar e adicionar o novo item HTML e reiniciar o input
  list.appendChild(addItem(inputText));
  newItem.value = "";
});

// Deletar Item
list.addEventListener("click", (event) => {
  if (event.target.closest(".item-delete")) {
    const li = event.target.closest(".item");
    li.remove();
    showAlert();
  }
});

removedAlert.addEventListener("click", (event) => {
  if (event.target.closest(".alert-close")) {
    removedAlert.dataset.visible = "false";
  }
});

// Função que cria um novo item
function addItem(item) {
  const li = document.createElement("li");
  li.classList.add("item");

  li.innerHTML = `
    <span class="item-checkbox">
      <div class="item-checkbox-image"></div>
      <input type="checkbox" />
    </span>
    <span class="item-content">${item}</span>
    <button class="item-delete" type="button" aria-label="Remover item">
      <img src="public/assets/icons/delete-icon.svg" alt="ícone de lixeira" />
    </button>
  `;
  return li;
}

function showAlert() {
  removedAlert.dataset.visible = "true";
  setTimeout(() => {
    removedAlert.dataset.visible = "false";
  }, 3500);
}
