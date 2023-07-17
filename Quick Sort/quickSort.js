import { listaLivros as livros } from "./listaLivros.js";

function quickSort (lista, esquerdaPivo, direitaPivo) {
    if (lista.length > 1) {
        let indiceAtual = particionaLista(lista, esquerdaPivo, direitaPivo);

        if(esquerdaPivo < indiceAtual - 1) {
            quickSort(lista, esquerdaPivo, indiceAtual - 1);
        }
        
        if(indiceAtual < direitaPivo) {
            quickSort(lista, indiceAtual, direitaPivo);
        }
    }
    return lista;
}

function particionaLista(lista, esquerdaPivo, direitaPivo) {
    let pivo = lista[Math.floor((esquerdaPivo + direitaPivo) / 2)];
    let atualEsquerda = esquerdaPivo;
    let atualDireita = direitaPivo;

    while (atualEsquerda <= atualDireita) {
        // fazendo o pivo andar para a esquerda
        while (lista[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        // fazendo o pivo andar para a direita
        while (lista[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        // trocando de lugar
        if (atualEsquerda <= atualDireita) {
            let itemAtual = lista[atualEsquerda];
            let itemFinal = lista[atualDireita];
        
            lista[atualEsquerda] = itemFinal;
            lista[atualDireita] = itemAtual;
    
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(livros, 0, livros.length - 1));