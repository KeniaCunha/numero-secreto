function verificarChuteEhValido(chute){
    const numero = +chute
    

    if (verificarChuteInvalido(numero)){

        
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML =`
                <h2>GAME OVER</h2>
                <br>
                <br>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `

            document.body.style.backgroundColor = "black"

        }else{
                elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
        }
    }

    if (verificarNumero(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML=`
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}.</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor
            <i class="fa-solid fa-down-long"></i>
            </div>
        `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior
            <i class="fa-solid fa-up-long"></i>
            </div>
        `
    }
}    

function verificarChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificarNumero(numero) {
    return numero > maiorValor || numero < menorValor
}

//reiniciar o jogo
document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente'){
        //Recarrega a página atual e reinicia o jogo,  "window" representa a janela aberta no navegador. Já "location",contém informações sobre a URL atual e "reload()" é usado para recarregar a página.
        window.location.reload()
    }
})
