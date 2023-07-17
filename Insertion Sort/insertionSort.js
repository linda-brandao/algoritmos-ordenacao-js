import { listaLivros as livros } from "./listaLivros.js";

// insertion sort -> vai inserindo o valor dentro de array ordenando
for (let posicaoAtual = 0; posicaoAtual < livros.length; posicaoAtual++) {
    let posicaoDeAnalise = posicaoAtual;
                                        // Segunda Posição                  // Primeira Posição
    while (posicaoDeAnalise > 0 && livros[posicaoDeAnalise].preco < livros[posicaoDeAnalise - 1].preco) {

        //trocando de posição os elementos
        let itemAtual = livros[posicaoDeAnalise];
        let itemAnterior = livros[posicaoDeAnalise- 1];

        livros[posicaoDeAnalise] = itemAnterior;
        livros[posicaoDeAnalise- 1] = itemAtual;

        posicaoDeAnalise--;
    }
}

console.log(livros);

