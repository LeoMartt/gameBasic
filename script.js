// Array de palavras simulando um arquivo de texto
const palavras = [ "geladeira", "liquidificador", "televisão", "ventilador", "microondas", 
    "cafeteira", "computador", "monitor", "telefone", "impressora", 
    "relógio", "abajur", "bicicleta", "calculadora", "cadeira", 
    "sofá", "guarda-roupa", "prateleira", "mesa", "luminária",
    "controle", "aparelho-de-som", "tapete", "almofada", "espelho",
    "escova", "toalha", "cobertor", "colchão", "travesseiro",
    "torradeira", "chaleira", "armário", "frigideira", "caneca",
    "martelo", "parafusadeira", "furadeira", "esmerilhadeira", "chave-de-fenda", 
    "serrote", "alicate", "formão", "nivel", "trena",
    "perfuratriz", "serra-circular", "lima", "torquês", "plaina",
    "grampeador", "serra-tico-tico", "marreta", "espatula", "chave-inglesa",
    "chave-allen", "broca", "serrote", "sabre", "machado",
    "serrote", "foice", "talhadeira", "cinzel", "escopro",
    "melancia", "abacaxi", "maracujá", "manga", "banana", 
    "laranja", "maçã", "uva", "morango", "pera",
    "kiwi", "coco", "pitanga", "jabuticaba", "goiaba", 
    "melão", "mamão", "carambola", "ameixa", "limão",
    "framboesa", "mirtilo", "pêssego", "nectarina", "caqui",
    "tangerina", "graviola", "acerola", "figo", "caju",
    "alface", "couve", "espinafre", "rúcula", "agrião",
    "cebolinha", "salsinha", "manjericão", "hortelã", "alecrim",
    "cenoura", "batata", "abóbora", "pepino", "berinjela",
    "chuchu", "inhame", "beterraba", "rabanete", "quiabo",
    "abobrinha", "mandioca", "ervilha", "milho", "feijão",
    "vagem", "aspargo", "cogumelo", "tomate", "pimentão",
    "livro", "caneta", "lápis", "borracha", "caderno", 
    "agenda", "mochila", "óculos", "pasta", "chaveiro",
    "isqueiro", "guarda-chuva", "bateria", "pincel", "tinta", 
    "quadro", "cola", "tesoura", "grampeador", "régua",
    "fita", "caixa", "saco", "maleta", "bolsa",
    "sapato", "chapéu", "boné", "relógio", "pulseira",
    "anel", "brinco", "corrente", "pingente", "cinto",
    "guarda-chuva", "fósforo", "isqueiro", "isopor", "vela",
    "serrote", "machado", "foice", "roçadeira", "trator",
    "torno", "serra", "furadeira", "esmeril", "esquadro",
    "morsa", "serrote", "arco-de-serra", "chave-de-boca", "serrote",
    "beterraba", "abóbora", "pepino", "quiabo", "ervilha",
    "milho", "feijão", "cenoura", "mandioca", "batata-doce",
    "brócolis", "couve-flor", "alface", "espinafre", "rúcula",
    "agrião", "salsa", "cebola", "alho", "manjericão",
    "escova", "desodorante", "sabonete", "xampu", "condicionador",
    "pente", "cotonete", "fio-dental", "toalha", "sabão-em-pó",
    "detergente", "esponja", "rodo", "vassoura", "pano",
    "balde", "saco-de-lixo", "pregador", "prendedor", "varal",
    "clipe", "grampo", "agulha", "linha", "tesoura-de-costura",
    "alfinete", "botão", "zíper", "fita-métrica", "dedal",
    "lâmpada", "aspirador", "escada", "mouse", "teclado", 
    "disco-rígido", "pendrive", "monitor", "tablet", "fones-de-ouvido",
    "caixa-de-som", "mousepad", "bateria", "fone-bluetooth", "carregador",
    "jogo-americano", "prato", "garfo", "faca", "colher",
    "copo", "taça", "saca-rolhas", "abridor-de-garrafas", "fruteira",
    "ralador", "espremedor", "tábua-de-corte", "escorredor", "peneira",
    "luvas-de-cozinha", "panela", "cacarola", "frigideira-antiaderente", "forma",
    "caçarola", "batedeira", "espátula", "colher-de-pau", "descascador",
    "tampa-de-panela", "pegador-de-macarrão", "sanduicheira", "grelha", "churrasqueira",
    "cooler", "assadeira", "forma-de-bolo", "rolo-de-massa", "rendeira",
    "jogo-de-talheres", "jogo-de-pratos", "potes-plásticos", "sanduicheira-grill", "espremedor-de-alho",
    "escumadeira", "pipoqueira", "açucareiro", "paliteiro", "saleiro",
    "pimenteiro", "ralador", "garrafa-térmica", "termômetro", "barômetro",
    "chaleira-elétrica", "aquecedor", "umidificador", "desumidificador", "purificador-de-água",
    "ventilador-de-teto", "secador-de-cabelo", "chapinha", "modelador-de-cachos", "babyliss",
    "espelho-de-mão", "espelho-de-aumento", "escova-de-dentes-elétrica", "lâmina-de-barbear", "maquininha-de-cortar-cabelo",
    "secador-de-unhas", "massageador", "poltrona", "carrinho-de-compras", "esteira",
    "bicicleta-ergométrica", "halteres", "corda-de-pular", "tapete-de-yoga", "garrafa-de-água",
    "marmiteira", "lancheira", "copo-térmico", "squeeze", "porta-lápis",
    "caixa-de-ferramentas", "marreta", "chave-inglesa", "chave-allen", "fita-métrica",
    "alicate-de-pressão", "trena", "martelo-de-borracha", "serra", "tesoura-de-poda",
    "regador", "vaso-de-flores", "pá", "enxada", "ancinho",
    "mangueira", "suporte-para-vasos", "kit-de-jardinagem", "bomba-de-ar", "soprador-de-folhas",
    "ventilador-portátil", "iluminador-de-estúdio", "microfone", "tripé", "câmera-fotográfica",
    "câmera-de-segurança", "interfone", "campainha", "alarme-residencial", "corta-relva",
    "kit-de-plantas", "mesa-dobravel", "guarda-sol", "cadeira-de-praia", "rede-de-descanso",
    "banquinho", "kit-de-pintura", "pincéis", "telas", "cavalete",
    "estojo-de-lápis", "grafite", "giz", "marcador", "canetão",
    "suporte-de-celular", "case-de-celular", "caixa-de-som-portátil", "filtro-de-luz", "luminária-de-mesa",
    "gel-de-limpeza", "esfoliante", "kit-de-manicure", "porta-joias", "secador-de-roupas",
    "máquina-de-lavar", "tanquinho", "centrífuga", "varal-portátil", "sapateira",
    "cabide", "porta-trecos", "armário-de-banho", "cesta-de-lixo", "cesta-de-roupa",
    "suporte-para-toalhas", "toalheiro-elétrico", "prateleira-de-banheiro", "saboneteira", "suporte-para-xampu",
    "garrafa", "jogo-de-chá", "jogo-de-xícaras", "bule", "suporte-para-xícaras",
    "porta-copos", "jogo-de-taças", "escova-de-vaso-sanitário", "banheira", "cesto-organizador",
    "lixeira-de-pedal", "porta-papel-higiênico", "porta-sabonete-líquido", "penteadeira", "roupeiro",
    "baú", "puff", "camiseiro", "banqueta", "divisória-de-ambientes",
    "estante", "rack", "painel-para-tv", "mesa-de-centro", "mesa-lateral",
    "cadeira-de-escritório", "arquivador", "gaveteiro", "mesa-de-canto", "mesa-de-jantar",
    "toalha-de-mesa", "jogo-americano", "cadeira-giratoria", "aparador", "criado-mudo",
    "divã", "cama", "beliche", "bicama", "colchonete",
    "piscina-inflável", "boia", "kit-de-snorkel", "máscara-de-mergulho", "prancha-de-surf",
    "prancha-de-bodyboard", "remo", "caiaque", "barraca", "mochila-de-trilha",
    "lanterna", "bussola", "cantil", "gelo-reutilizável", "fogareiro-portátil",
    "kit-de-facas", "tábua-de-churrasco", "espeto", "grelha-portátil", "garfo-de-churrasco",
    "machado", "machadinha", "facão", "faca-de-caça", "garfo-de-assado",
    "kit-de-costura", "tesoura-de-costura", "agulha-de-tricô", "agulha-de-crochê", "carretilha",
    "máquina-de-costura", "overloque", "ferro-de-passar", "tábua-de-passar", "porta-ferro",
    "sapato-social", "sandália", "chinelos", "sapato-de-esporte", "tênis",
    "botas", "sapato-infantil", "meias", "luvas", "gorro",
    "cachecol", "chapéu-panamá", "boina", "vassoura", "rodo",
    "escovão", "esfregão", "balde-com-centrifuga", "limpa-vidros", "kit-de-panos-de-chão",
"leão", "tigre", "elefante", "girafa", "hipopótamo",
  "rinoceronte", "urso", "lobo", "raposa", "cervo",
  "veado", "zebra", "javali", "antílope", "búfalo",
  "onça", "gato", "cachorro", "coelho", "vaca",
  "bode", "cabra", "ovelha", "porco", "camelo",
  "dromedário", "burro", "mula", "cavalo", "jumento",
  "panda", "gambá", "tatu", "tamanduá", "capivara",
  "cutia", "esquilo", "rato", "ratazana", "hamster",
  "porquinho-da-índia", "chinchila", "texugo", "furão", "gato-do-mato",
  "lontra", "morcego", "doninha", "ouriço", "texugo",
  "pomba", "gavião", "águia", "falcão", "coruja",
  "pardal", "canário", "papagaio", "arara", "periquito",
  "calopsita", "codorna", "galinha", "galo", "pato",
  "marreco", "cisne", "garça", "ema", "pinguim",
  "albatroz", "gaivota", "andorinha", "tucano", "flamingo",
  "corvo", "urubu", "pelicano", "faisão", "sabiá",
  "joão-de-barro", "beija-flor", "pardal", "cardeal", "curió",
  "aracuã", "araponga", "pintassilgo", "mutum", "inhambu",
  "formiga", "abelha", "vespa", "mosca", "mosquito",
  "pernilongo", "borboleta", "mariposa", "besouro", "joaninha",
  "gafanhoto", "grilo", "cupim", "barata", "traça",
  "louva-a-deus", "cigarra", "libélula", "mosca-de-fruta", "mosquito-palha",
  "caruncho", "piolho", "pulga", "carrapato", "aranha",
  "escorpião", "centopeia", "lacraia", "taturana", "bicho-da-seda",
  "besouro-rinoceronte", "besouro-hercules", "vaga-lume", "bicho-preguiça", "marimbondo",
  "tubarão", "baleia", "golfinho", "foca", "leão-marinho",
  "peixe-palhaço", "peixe-boi", "polvo", "lula", "medusa",
  "arraia", "cavalo-marinho", "estrela-do-mar", "ouriço-do-mar", "caranguejo",
  "siri", "lagosta", "camarão", "marisco", "ostra",
  "mexilhão", "poliqueto", "anêmona-do-mar", "peixe-espada", "peixe-leão",
  "peixe-pedra", "piranha", "pirarucu", "tilápia", "traíra",
  "tambaqui", "pacu", "peixe-elétrico", "bagre", "truta",
  "jacaré", "crocodilo", "lagarto", "iguana", "camaleão",
  "cobra", "jararaca", "cascavel", "coral", "sucuri",
  "jiboia", "salamandra", "tritão", "rã", "sapo",
  "perereca", "cobra-d'água", "tartaruga", "cágado", "jabuti",
  "gecko", "anaconda", "serpente", "cobra-verde", "cobra-do-milho",
  "cavalo", "vaca", "boi", "bezerro", "ovelha",
  "bode", "cabra", "porco", "javali", "mula",
  "burro", "galinha", "pato", "ganso", "peru",
  "pintinho", "coelho", "pônei", "porquinho-da-índia", "codorna",
  "canguru", "coalas", "diabo-da-tasmânia", "wombat", "ornitorrinco",
  "casuar", "ema", "kiwi", "lêmure", "suricata",
  "fossa", "quati", "capivara", "preguiça", "tamanduá-bandeira",
  "tigre-branco", "leopardo", "guepardo", "hipopótamo-pigmeu", "okapi",
  "manatim", "dugongo", "narval", "beluga", "orca",
  "bicho-de-pé", "percevejo", "triatoma", "mosquito-da-dengue", "abelha-rainha",
  "zangão", "borboleta-monarca", "joaninha-vermelha", "joaninha-amarela", "mosquito-pólvora",
  "barata-de-cozinha", "formiga-cortadeira", "formiga-vermelha", "formiga-cabeçuda", "mariposa-da-seda",
  "traça-de-livro", "traça-de-roupa", "formiga-leão", "grilo-campeiro", "besouro-japonês"];
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
