function verificaSeChuteValido(chute) {
    const numero = +chute;
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor inválido: o valor precisa ser um número</div>';
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor Inválido: o número precisa estar entra ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou!!!</h2> <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor</div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior</div>`
    }


};

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})