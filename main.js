const frm = document.querySelector("form");
const contato = document.getElementById("nome");
const phone = document.getElementById("telefone");
const contatos = [];
const telefones = [];

let linhas = "";

frm.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaLista();
});

function adicionaLinha() {
  if (contatos.includes(contato.value) || telefones.includes(phone.value)) {
    alert(`O nome ou o número já está cadastrado`);
  } else {
    contatos.push(contato.value);
    telefones.push(phone.value);

    let linha = `<tr>`;
    linha += `<td>${contato.value}</td>`;
    linha += `<td>${phone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }
  contato.value = "";
  phone.value = "";
}

function atualizaLista() {
  const tabelaContatos = document.querySelector("tbody");
  tabelaContatos.innerHTML = linhas;
}
