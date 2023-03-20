// Seleciona o formulário
const formulario = document.querySelector('#formulario');

// Seleciona o elemento tbody da tabela
const tabelaCorpo = document.querySelector('#tabela-corpo');

// Cria um array vazio para armazenar os dados dos usuários
const usuarios = [];

// Adiciona um evento de envio ao formulário
formulario.addEventListener('submit', event => {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Seleciona os campos de entrada do formulário
  const nomeInput = document.querySelector('#nome');
  const idadeInput = document.querySelector('#idade');

  // Obtém os valores dos campos de entrada
  const nome = nomeInput.value;
  const idade = idadeInput.value;

  // Cria um objeto com as informações do usuário
  const usuario = {
    nome,
    idade
  };

  // Adiciona o objeto de usuário ao array de usuários
  usuarios.push(usuario);

  // Limpa os campos de entrada do formulário
  nomeInput.value = '';
  idadeInput.value = '';

  // Cria uma nova linha (tr) para a tabela
  const novaLinha = document.createElement('tr');

  // Popula a nova linha com as células (td) do objeto de usuário
  Object.values(usuario).forEach(valor => {
    const novaCelula = document.createElement('td');
    novaCelula.textContent = valor;
    novaLinha.appendChild(novaCelula);
  });

  // Adiciona a nova linha à tabela
  tabelaCorpo.appendChild(novaLinha);
});
