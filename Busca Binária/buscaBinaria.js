import { listaLivros as livros } from "./listaLivrosOrdenada.js";

function buscaBinaria (lista, posicaoInicial, posicaoFinal, precoBuscado) {
    console.log('posicaoInicial, posicaoFinal', posicaoInicial, posicaoFinal)

    const indiceMeio = Math.floor((posicaoInicial + posicaoFinal) / 2);
    const produtoAtual = lista[indiceMeio];

    if (posicaoInicial > posicaoFinal) {
        return -1;
    }

    if (precoBuscado === produtoAtual.preco) {
        return indiceMeio;
    }

    if (precoBuscado < produtoAtual.preco) {
        return buscaBinaria(lista, posicaoInicial, indiceMeio - 1, precoBuscado);
    }

    if (precoBuscado > produtoAtual.preco) {
        return buscaBinaria(lista, indiceMeio + 1, posicaoFinal, precoBuscado);
    }
}

console.log(buscaBinaria(livros, 0, livros.length - 1, 60));