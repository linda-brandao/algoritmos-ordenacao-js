import { listaLivros as livros } from "./listaLivros.js";

//selection sort -> sempre encontra o menor valor e coloca na primeira posição do array

//pode ser dividida em duas funções
for (let posicaoAtual = 0; posicaoAtual < livros.length; posicaoAtual++) {
    //função para achar a posição do menor valor
    let menorValor = posicaoAtual;

    for (let posicaoDoMenor = posicaoAtual; posicaoDoMenor < livros.length; posicaoDoMenor++) {
        if (livros[posicaoDoMenor].preco < livros[menorValor].preco) {
            menorValor = posicaoDoMenor;
        }
    }
    
    //função para trocar de posição os elementos
    let itemAtual = livros[posicaoAtual];
    let itemAnterior = livros[menorValor];

    livros[posicaoAtual] = itemAnterior;
    livros[menorValor] = itemAtual;
}
console.log(livros);
