
const perguntas = [
    {
        pergunta: "Você acha que a IA deve ter direitos?",
        alternativas: ["Sim", "Não", "Talvez"],
        respostaCorreta: "Talvez"
    },
    {
        pergunta: "A IA pode substituir o trabalho humano?",
        alternativas: ["Sim", "Não", "Depende do trabalho"],
        respostaCorreta: "Depende do trabalho"
    },
    {
        pergunta: "A IA deve ser regulamentada?",
        alternativas: ["Sim", "Não", "Não sei"],
        respostaCorreta: "Sim"
    }
];

let perguntaAtual = 0;

function carregarPergunta() {
    const perguntaElement = document.getElementById('pergunta');
    const alternativasElement = document.getElementById('alternativas');
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.textContent = '';

    if (perguntaAtual < perguntas.length) {
        perguntaElement.textContent = perguntas[perguntaAtual].pergunta;
        alternativasElement.innerHTML = '';

        perguntas[perguntaAtual].alternativas.forEach(alternativa => {
            const div = document.createElement('div');
            div.textContent = alternativa;
            div.classList.add('alternativa');
            div.onclick = () => verificarResposta(alternativa);
            alternativasElement.appendChild(div);
        });
    } else {
        perguntaElement.textContent = "Obrigado por participar!";
        alternativasElement.innerHTML = '';
        document.getElementById('proximaPergunta').style.display = 'none';
    }
}

function verificarResposta(resposta) {
    const resultadoElement = document.getElementById('resultado');
    if (resposta === perguntas[perguntaAtual].respostaCorreta) {
        resultadoElement.textContent = "Resposta Correta!";
    } else {
        resultadoElement.textContent = "Resposta Errada!";
    }
}

function proximaPergunta() {
    perguntaAtual++;
    carregarPergunta();
}

// Carrega a primeira pergunta ao iniciar
carregarPergunta();

    const Carrol = {marca:"Volkswagen" } 