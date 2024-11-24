// Array de palavras simulando um arquivo de texto
const palavras = [  
faca, garfo, colher, prato, copo, panela, frigideira, liquidificador, batedeira, geladeira, microondas, fogão, espátula, ralador, peneira, jarra, chaleira, tigela, concha, escorredor, bule, caneca, forma, tábua, avental, pincel, pegador, descascador, moedor, abridor, termômetro, balança, martelo, espremedor, mixer, cortador, faca elétrica, panela de pressão, wok, grill, torradeira, forno, espremedor de alho, maçarico, copo medidor, colher de pau, garrafa térmica, escumadeira, rolo de massa, copo de vidro, faca de pão, peneira de chá, colher medidora, coador, assadeira, frigideira antiaderente, tábua de corte, panela elétrica, sanduicheira, garfo de churrasco, espetos, grelha, faca de carne, prato fundo, bowl, espátula de silicone, colher de servir, pincel de cozinha, pegador de salada, amassador de batata, descascador de frutas, ralador de queijo, moedor de café, peneira de farinha, tigela de inox, jarra de plástico, chaleira elétrica, bule de chá, concha de feijão, colher de sorvete, termômetro de cozinha, balança digital, garrafa de água, copo de plástico, travessa, prato
];
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
