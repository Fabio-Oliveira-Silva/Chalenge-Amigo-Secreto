//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Criar um array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nome = document.getElementById('amigo').value;

    // Validar a entrada
    if (nome.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    // Verificar se o nome já existe no array
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    // Atualizar o array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualizar a lista de amigos exibida
    atualizarLista();
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');


    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array de amigos e criar elementos <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Não há amigos na lista para sortear.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto sorteado: ${amigoSorteado}</li>`;
}



