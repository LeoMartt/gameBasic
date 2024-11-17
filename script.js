// Array de palavras simulando um arquivo de texto
const palavras = [ 
  "Leão", "Tigre", "Elefante", "Gato", "Cachorro", "Lobo", "Raposa", "Cervo", "Pinguim",
  "Ornitorrinco", "Golfinho", "Tubarão", "Águia", "Falcão", "Cobra", "Jacaré", "Cavalo-Marinho",
  "Polvo", "Lêmure", "Esquilo", "Canguru", "Koala", "Tamanduá", "Bicho-Preguiça", "Arraia",
  "Pavão", "Hiena", "Zebra", "Rinoceronte", "Hipopótamo", "Urso-Pardo", "Urso-Polar", "Pantera",
  "Caranguejo", "Lagosta", "Camarão", "Baleia", "Tartaruga", "Panda", "Jacutinga", "Lobo-Guará",
  "Jabuti", "Estrela-do-Mar", "Borboleta", "Abelha", "Vespa", "Besouro", "Grilo", "Louva-a-Deus",
  "Cigarra", "Cupim", "Escorpião", "Aranha", "Formiga", "Fênix", "Dragão", "Unicórnio", "Grifo",
  "Quimera", "Minotauro", "Hipogrifo", "Mantícora", "Hidra", "Esfinge", "Yeti", "Kraken", "Basilisco",
  "Serpente Marinha", "Dragão-Marinho", "Salamandra de Fogo", "Caranguejo Gigante", "Coruja",
  "Peixe-Palhaço", "Peixe-Boi", "Golfinho-Rosa", "Morcego", "Guaxinim", "Alpaca", "Iaque", "Tapir",
  "Lêmure-Rabo-Anelado", "Gorila", "Chimpanzé", "Orangotango", "Porco-Espinho", "Echidna", "Foca",
  "Leão-Marinho", "Narval", "Camaleão", "Pirilampo", "Ácaro", "Corvo", "Ganso", "Furão", "Onça-Pintada",
  "Lobo-Cinzento", "Gavião-Carcará", "Tucano", "Arara", "Papagaio", "Sabiá", "Galo", "Gambá", "Coala",
  "Quati", "Panda-Vermelho", "Iguana", "Lagarto", "Bicho-Geográfico", "Peixe-Espada", "Cavalo",
  "Burro", "Asno", "Cervo-Encantado", "Lula Gigante", "Tiranossauro Rex", "Velociraptor", "Tricerátopo",
  "Pterodáctilo", "Anaconda", "Suricato", "Paca", "Capivara", "Tatu", "Arraia-Jamanta", "Orca", 
  "Peixe-Beta", "Peixe-Leão", "Garoupa", "Esturjão", "Tilápia", "Lagosta-Espinhosa", "Caramujo",
  "Mexilhão", "Poliqueta", "Anêmona-do-Mar", "Esponja-Marinha", "Anglerfish", "Peixe-Víbora",
  "Cachalote", "Ouriço-do-Mar", "Foca-Monge", "Macaco-Prego", "Macaco-Aranha", "Gibão", "Mandril",
  "Babuíno", "Cobra-Coral", "Cobra-Verde", "Sucuri", "Dragão-de-Komodo", "Lagarto-Azul",
  "Jacaré-Açu", "Cágado", "Tigre-d'Água", "Falcão-Peregrino", "Condor", "Flamingo", "Pelicano",
  "Garça", "Albatroz", "Pato-Mandarim", "Pardal", "Andorinha", "Coruja-Buraqueira", "Pomba",
  "Gavião-Real", "Morcego-Morceguinha", "Barata", "Mosca", "Mosquito", "Libélula", "Traça", 
  "Piolho-de-Cobra", "Escaravelho", "Grilo-Cantador", "Mariposa", "Gafanhoto", "Largatixa",
  "Salamandra", "Tritão", "Sapinho-Dourado", "Perereca", "Rã-Touro", "Centopeia", "Milípede",
  "Arraia-Elétrica", "Peixe-Lua", "Peixe-Dourado", "Quati-Preguiçoso", "Coelho-da-Névoa",
  "Tamanduá-Bandeira", "Pavão-Misterioso", "Leopardo-das-Neves", "Gato-Selvagem", "Texugo",
  "Rato-Canguru", "Ratão-do-Banhado", "Galo-de-Campina", "Marreco", "Galo-Cantor", "Anu-Branco",
  "Jacaré-Albino", "Leopardo-d'Água", "Cervo-Lendário", "Furão-Saltador" ];
const impostor = "Impostor";
const imagemPalavra = "imageWord.png"; // Imagem para a palavra sorteada
const imagemImpostor = "imageImpostor.jpg"; // Imagem para o impostor
let palavraSorteada = "";
let jogadores = [];
let numPlayers = 0;
let currentPlayer = 0;

document.getElementById('startButton').addEventListener('click', () => {
    // Obter o número de jogadores
    numPlayers = parseInt(document.getElementById('numPlayers').value);

    if (numPlayers < 3) {
        alert("O número de jogadores deve ser no mínimo 3!");
        return;
    }

    // Sortear uma palavra do array
    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];

    // Exibir botão "Atribuir"
    document.getElementById('assignButton').style.display = "inline-block";
    document.getElementById('nextButton').style.display = "none"; // Esconder o botão "Próximo"

    // Limpar array de jogadores
    jogadores = [];
    currentPlayer = 0; // Reiniciar o jogador atual
});

document.getElementById('assignButton').addEventListener('click', () => {
    if (numPlayers === 0) {
        alert("Defina o número de jogadores e sorteie uma palavra primeiro!");
        return;
    }

    // Preencher o array com a palavra sorteada e o impostor
    jogadores = Array(numPlayers).fill(palavraSorteada);
    
    // Sortear uma posição aleatória para o impostor
    const impostorIndex = Math.floor(Math.random() * numPlayers);
    jogadores[impostorIndex] = impostor;

    // Exibir a palavra para o primeiro jogador
    mostrarPalavra(currentPlayer);
    
    // Alterar o botão "Atribuir" para "Próximo"
    document.getElementById('assignButton').style.display = "none";
    document.getElementById('nextButton').style.display = "inline-block";
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentPlayer++;
    if (currentPlayer < jogadores.length) {
        // Mostrar a palavra do próximo jogador
        mostrarPalavra(currentPlayer);
    } else {
        // Se todos os jogadores já foram mostrados, esconder o botão "Próximo"
        document.getElementById('nextButton').style.display = "none";
    }
});

function mostrarPalavra(playerIndex) {
    const playerWord = jogadores[playerIndex];
    const playerNumber = playerIndex + 1;

    // Definir a imagem com base na palavra
    let imageUrl = '';
    if (playerWord === impostor) {
        imageUrl = imagemImpostor; // Imagem para o impostor
    } else {
        imageUrl = imagemPalavra; // Imagem para a palavra sorteada
    }
    
    document.getElementById('playerWord').innerHTML = `Jogador ${playerNumber}, sua palavra é: ${playerWord} <img src="${imageUrl}" alt="${playerWord}" style="width: 50px; height: auto; margin-left: 10px;">`;

    // Mostrar o modal
    $('#playerModal').modal('show');
}
