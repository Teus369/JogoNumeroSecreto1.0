alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 150;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1 ); // parseInt(Math.random () * 100 + 1 ); = numero aleatorios 
console.log(numeroSecreto);
let chute;
let tentativas = 1;



// while = enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto) {

        //break=para
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas = tentativas + 1;
        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`isso ai!! voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//esse de cima é igual ao de baixo 
// if (tentativas > 1) {
//     alert(`isso ai!! voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`isso ai!! voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

