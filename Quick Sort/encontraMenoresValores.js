import { listaLivros as livros } from "./listaLivros.js";

function encontraMenoresValores (pivo, lista) {
    let menoresValores = 0;

    for (let posicaoAtual = 0; posicaoAtual < lista.length; posicaoAtual++) {
        let produtoAtual = lista[posicaoAtual];

        if (produtoAtual.preco < pivo.preco) {
            menoresValores++;
        }
    }

    trocaDePosicao(lista, lista.indexOf(pivo), menoresValores)
    return lista;
}

function trocaDePosicao(lista, posicaoAtual, posicaoFinal) {
    let itemAtual = lista[posicaoAtual];
    let itemFinal = lista[posicaoFinal];

    lista[posicaoAtual] = itemFinal;
    lista[posicaoFinal] = itemAtual;
}

function divideNoPivo(lista) {
    let pivo = lista[Math.floor(lista.length / 2)];
    encontraMenoresValores(pivo, lista);
    let valoresMenores = 0;

    for (let posicaoAtual = 0; posicaoAtual < lista.length; posicaoAtual++) {
        let produtoAtual = lista[posicaoAtual];

        if(produtoAtual.preco < pivo.preco && produtoAtual !== pivo) {
            trocaDePosicao(lista, posicaoAtual, valoresMenores);
            valoresMenores++;
        }
    }

    return lista;
}

console.log(divideNoPivo(livros));
//console.log(encontraMenoresValores(livros[2], livros));