/*8.	Implementar una calculadora que permita ingresar dos operandos mediante dos inputs y permita realizar 
las operaciones básicas (suma, resta, división, multiplicación) elegidas desde una lista desplegable (select).*/

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operacion = document.querySelector('#operacion');
let textoResultado = document.querySelector('#resultado');

let btnIgual = document.querySelector('#btn-igual').addEventListener('click', function () {
    let resultado = realizarOperacion();
    textoResultado.innerHTML = resultado;
    num1.value="";
    num2.value="";
});

function realizarOperacion (){
    let n1= parseInt(num1.value);   
    let n2= parseInt(num2.value);
    
    let resultado = 0;
    if(operacion.value === 'suma'){
        resultado = n1 + n2;
    } else if(operacion.value === 'resta'){
        resultado = n1 - n2;
    } else if (operacion.value === 'multiplicacion'){
        resultado = n1 * n2;
    } else if (operacion.value === 'division'){
        resultado = n1 / n2;
    }

    return resultado; 
}