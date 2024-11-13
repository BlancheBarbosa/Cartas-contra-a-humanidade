let cartasPretas = [
    "No final do dia, tudo que eu quero é ________.",
    "A festa só ficou estranha quando alguém trouxe ________."
    // Adicione mais cartas aqui conforme necessário
];

let cartasBrancas = [
    "A ilusão de escolha em uma sociedade altamente capitalista.",
    "Bactéria comedora de carne",
    "Cobras sexuais voadoras"
    // Adicione mais cartas aqui conforme necessário
];

let czarAtual = 0;

function iniciarJogo() {
    document.getElementById('areaJogo').style.display = 'block';
    proximoTurno();
}

function proximoTurno() {
    if (czarAtual >= cartasPretas.length) {
        alert("Fim do jogo!");
        return;
    }
    
    let cartaPreta = cartasPretas[czarAtual];
    document.getElementById('cartaPreta').innerText = cartaPreta;
    document.getElementById('czar').innerText = `Jogador ${czarAtual + 1}`;
    document.getElementById('respostas').innerHTML = gerarRespostas();
    
    czarAtual++;
}

function gerarRespostas() {
    let respostas = "";
    for (let i = 0; i < 4; i++) {
        let respostaAleatoria = cartasBrancas[Math.floor(Math.random() * cartasBrancas.length)];
        respostas += `<p>${respostaAleatoria}</p>`;
    }
    return respostas;
}
