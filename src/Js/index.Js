// Seleciona todos os botões e os personagens
const botoes = document.querySelectorAll("button");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe 'selecionado' do botão que estiver ativo
 */
function desmarcarBotaoSelecionado() {
    const botaoAtivo = document.querySelector(".botao.selecionado");
    if (botaoAtivo) {
        botaoAtivo.classList.remove("selecionado");
    }
}

/**
 * Marca o botão clicado como selecionado
 * @param {HTMLElement} botao - O botão que foi clicado
 */
function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

/**
 * Esconde o personagem atualmente exibido
 */
function ocultarPersonagemAtual() {
    const personagemVisivel = document.querySelector(".personagem.selecionado");
    if (personagemVisivel) {
        personagemVisivel.classList.remove("selecionado");
    }
}

/**
 * Mostra o personagem correspondente ao botão clicado
 * @param {number} indice - Índice do botão clicado, que corresponde ao personagem
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add("selecionado");
}

/**
 * Configura os eventos de clique em todos os botões
 */
function configurarEventos() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            // Troca o botão selecionado
            desmarcarBotaoSelecionado();
            marcarBotaoComoSelecionado(botao);

            // Troca o personagem exibido
            ocultarPersonagemAtual();
            mostrarPersonagem(indice);
        });
    });
}

// Inicializa o script
configurarEventos();
