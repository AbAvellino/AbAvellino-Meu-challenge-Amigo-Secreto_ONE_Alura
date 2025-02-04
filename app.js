// Exibe mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem vindo ao Amigo Secreto, insira os nomes no local designado e aperte sortear.");
};

// Array para armazenar os nomes dos amigos (limite de 100)
let amigos = [];

// Função para adicionar um nome ao array e exibir na tela
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    if (amigos.length >= 100) {
        alert("O limite de 100 nomes foi atingido!");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear!");
        return;
    }

    let embaralhado = [...amigos];
    embaralhado.sort(() => Math.random() - 0.5);

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length];

        let li = document.createElement("li");
        li.textContent = `${amigo1} → ${amigo2}`;
        resultadoLista.appendChild(li);
    }
}
