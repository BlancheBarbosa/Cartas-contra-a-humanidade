let cartasPretas = [
"No final do dia, tudo que eu quero é ________."
"A festa só ficou estranha quando alguém trouxe ________."
"O segredo para uma vida longa é ________."
"Ontem à noite, eu sonhei com ________."
"Meu chefe ficou chocado quando viu ________ na minha mesa."
"Se eu pudesse, eu colocaria ________ no meu currículo."
"A única coisa que pode salvar o mundo agora é ________."
"Minha primeira tatuagem será ________."
"O novo filme de ação traz ________ como arma secreta."
"Quem imaginaria que ________ seria tão popular?"
"Não posso viver sem ________."
"A melhor coisa para fazer em uma segunda-feira é ________."
"Meu superpoder secreto é ________."
"Nunca vou esquecer a primeira vez que experimentei ________."
"A última moda no Instagram é fotos de ________."
"Ei Reddit! 
"Eu estou_______________ "
"Me pergunte qualquer coisa."
"Qual é o prazer secreto do Batman?"
"Administração de Segurança dos Transportes agora proíbe 
em aviões."
"Próximo livro de J.K. Rowling: Harry Potter e a câmara de__________"
"É isso aí, eu matei ________________Você quer saber como?"
"Para, nÃo vai naquele banheiro. Tem __________________"
"Como eu perdi minha virgindade?"
"É uma pena que as crianças hoje em dia estejam todas se envolvendo com _____________________________"

"Para o meu próximo truque, vou tirar _____________________"
"Flavio Bolsonaro não pode gozar sem________________________"
"No novo filme original do Disney Channel, Hannah Montana tem dificuldade com ____________________ pela primeira vez."
"Vou fazer um detox esta semana. Nada além de suco de couve e ____________________"
"Papai, por que a mamãe está chorando? "
"Pessoas brancas gostam de__________________"
"Por que estou todo dolorido?"
"O que o ex-presidente Fernando Collor está pensando agora?"
"O que fez meu primeiro beijo ser tão estranho? "
"Durante o sexo, eu gosto de pensar em ____________________"
];

let cartasBrancas = [
"A ilusÃo de escolha em uma sociedade altamente capitalista. 
Bactéria comedora de carne",
"Cobras sexuais voadoras",
"Mwu pai",
"Vendo o que acontece quando você tranca pessoas em 
um quarto com gaivotas famintas",
"Uma desculpa lamentável para um pai", 
"A crucificação",
"Cometendo crimes",
"72 virgens",
"Um paradoxo de viagem no tempo",
"Sexo grupal",
"Cozinha mexicana autentica",
"Um consolo",
"Maconha",
"Calcinhas usadas",
"1kg de cocaina",
"Me cobrir com queijo parmesão e pimenta porque eu sou uma pizza",
"Sexo em lugar inusitado",
"TPM",
"Ficar pelado e assistir Nickelodeon",
"Sexo coletivo",
"Com minha boca",
"Botar um ovo",
"Ménage",
"Absorventes",
"A inevitável morte quente do universo",
"Privilégio branco",
"Ter um derrame",
"Hittler",
"O arrebatamento", 
"Sexo com Patrick Stewart", 
"Aborto com cabide",
"Meu namorado abusivo, que não é tão ruim quando você passa a conhecer ele melhor", 
"Mansplaining", 
"Uma montagem homoerótica de voleibol",
"P Diddy",
"Michael Jackson",
"Bukage".
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
