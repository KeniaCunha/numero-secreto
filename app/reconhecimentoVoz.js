const elementoChute = document.getElementById('chute');


//com o windown assim que o projeto abrir a identificação de voz está ativa
//Usando a API Web Speech
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

//informando o idioma
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', reconhecerFala)

function reconhecerFala(evento){
    chute = evento.results[0][0].transcript
    exibirChuteNaTela(chute);
    verificarChuteEhValido(chute);
}

function exibirChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end',() => recognition.start())


