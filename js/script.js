let visor = document.querySelector("#numeroAtual");
let visorSuperior = document.querySelector("#numeroAnterior");
let valor, valorArray, valorLest, multResult, divResult, somResult, subResult, number, numberLast, numberLater;

function transformValor(){
    valorArray = visor.textContent.split(' ');
    return valorArray;
}
function ultimaArray() {
    valorLest = valorArray.length - 1;
    return valorLest;
}
function multiplicacao() {
    number = valorArray.indexOf('x')
    numberLast = number - 1;
    numberLater = number + 1;
    multResult = valorArray[numberLast] * valorArray[numberLater];
    valorArray.splice(numberLast, 3, multResult)
    calcular();
}
function divisao() {
    number = valorArray.indexOf('/')
    numberLast = number - 1;
    numberLater = number + 1;
    divResult = valorArray[numberLast] / valorArray[numberLater];
    valorArray.splice(numberLast, 3, divResult)
    calcular();
}
function soma() {
    number = valorArray.indexOf('+')
    numberLast = number - 1;
    numberLater = number + 1;
    somResult = Number(valorArray[numberLast]) + Number(valorArray[numberLater]);
    valorArray.splice(numberLast, 3, somResult)
    calcular();
}
function subtracao() {
    number = valorArray.indexOf('-')
    numberLast = number - 1;
    numberLater = number + 1;
    subResult = valorArray[numberLast] - valorArray[numberLater];
    valorArray.splice(numberLast, 3, subResult)
    calcular();
}
function mudarLocal() {
    visor.innerHTML = `${valorArray}`;
    
}
function calcular(){
    visorSuperior.innerHTML = `${visor.textContent}`;
    switch(true){
    case valorArray.includes("x"):
        multiplicacao();
        break;
    case valorArray.includes("/"):
        divisao();
        break;
    case valorArray.includes("+"):
        soma();
        break;
    case valorArray.includes("-"):
        subtracao();
        break;
    }
    mudarLocal();
}
    
function reset() {
    visor.innerHTML = ``;
    valorArray = [];
}

function ButtonsEfeccet(element){
    valor = element.target.value;
    if(valor == 'C'){
        reset();
        return;
    }else if(valor == '='){
        calcular();
        return;
    }else if(valor == '+' || valor == '-' || valor == 'x' || valor == '/'){
        ultimaArray()
        visor.innerHTML += ` ${valor} `;
        transformValor();
        return;
    }else{
        visor.innerHTML += `${valor}`;
        transformValor();
    }
    return valor;
};

document.querySelectorAll(".buttonCalc").forEach(elemento => {elemento.addEventListener('click', ButtonsEfeccet, true)});