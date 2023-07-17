//                    0    1   2   3   4   5
const precosLivros = [25, 15, 30, 50, 45, 20];

let menorValor = 0;

function ordenaMenorValor (listaLivros) {
    for(let posicaoAtual = 0; posicaoAtual < listaLivros.length; posicaoAtual++) {
        if (listaLivros[posicaoAtual] < listaLivros[menorValor]) {
            menorValor = listaLivros[posicaoAtual];
        }
    }
}

ordenaMenorValor(precosLivros);

console.log(`O menor valor encontrado na lista é ${menorValor}!`)