import { edFolha as lista1, edGalho as lista2 } from "./arquivoBase.js";

let listaFinal = [];
let posicaoAtualLista1 = 0;
let posicaoAtualLista2 = 0;
let posicaoAtualListaFinal = 0;

while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    // guardando o valor atual da lista nas respectivas variáveis
    let produtoLista1 = lista1[posicaoAtualLista1];
    let produtoLista2 = lista2[posicaoAtualLista2];
    
    if (posicaoAtualLista1.preco < posicaoAtualLista2.preco) {
        listaFinal[posicaoAtualListaFinal] = produtoLista1;
        posicaoAtualLista1++;
    } else {
        listaFinal[posicaoAtualListaFinal] = produtoLista2;
        posicaoAtualLista2++;
    }
    posicaoAtualListaFinal++;
}

while (posicaoAtualLista1 < lista1.length) {
    listaFinal[posicaoAtualListaFinal] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    posicaoAtualListaFinal++;
}

while (posicaoAtualLista2 < lista2.length) {
    listaFinal[posicaoAtualListaFinal] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    posicaoAtualListaFinal++;
}

console.log(listaFinal);