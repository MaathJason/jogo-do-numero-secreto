/**let titulo = document.querySelector('h1');

titulo.textContent = "Hora do Desafio";

function btnClick(){
    console.log("O botão foi clicado")
};
*/


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


let listaNum = [];
let numLimite = 10;
let numSecreto = gerarNum();
let tentativas = 1;

function exibirText(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function msgInicial(){
    exibirText('h1', 'Jogo do número secreto');
    exibirText ('p', 'Escolha um número entre 1 e 10');
}

msgInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        exibirText('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let alertTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirText('p', alertTentativas);
    } else{
        if(chute > numSecreto){
            exibirText('p','o numero secreto é menor!');
        } else {
            exibirText('p', 'o numero secreto é maior!');
        }
        tentativas++;
    }
}

function gerarNum(){
    let numeroEsc = parseInt(Math.random() * numLimite + 1);
    let quantList = listaNum.length;
    if(quantList == 3){
        listaNum = [];
    }

    if(listaNum.includes(numeroEsc)){
        return gerarNum();
    } else {
        listaNum.push(numeroEsc);
        console.log(listaNum);
        return numeroEsc;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = gerarNum();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}