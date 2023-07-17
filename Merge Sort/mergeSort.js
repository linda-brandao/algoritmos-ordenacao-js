import { listaLivros as livros} from "./listaLivros.js";

function mergeSort (lista) {

    if (lista.length > 1) {
        const meio = Math.floor(lista.length / 2); // achando o indice do meio da lista; arredondando para baixo
        // trabalhando com a recursividade, a lista vai ficar se dividindo até ter apenas 1 elemento.
        const parte1 = mergeSort(lista.slice(0, meio));
        const parte2 = mergeSort(lista.slice(meio));

        lista = ordenaLista(parte1, parte2);
    }

    return lista;
}

function ordenaLista(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    let listaOrdenada = [];
    
    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoParte1 = parte1[posicaoAtualParte1];
        let produtoParte2 = parte2[posicaoAtualParte2];

        if (produtoParte1.preco < produtoParte2.preco) {
            listaOrdenada.push(produtoParte1);
            posicaoAtualParte1++;
        } else {
            listaOrdenada.push(produtoParte2);
            posicaoAtualParte2++;
        }
    }

    return listaOrdenada.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(livros));