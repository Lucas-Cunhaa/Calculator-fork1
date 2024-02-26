///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(num1, num2, operador) {
  let result = Number();
  num1 = Number(num1);
  num2 = Number(num2);
 
  if (operador === "+") { result = num1 + num2; };
  if (operador === "-") { result = num1 - num2; };
  if (operador === "*") { result = num1 * num2; };
  if (operador === "/") { result = num1 / num2; };
  if (operador === "e") { 
    for(let i = 0 ; i <= num2 ; i++ ) { 
      if( num2 === 1){
        result = num1;
      } else if(num2 === 0){
        result = 1;
      } else {
      result =  (num1 ** i)
      }
    }
    };
  
  return result;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/);
  let operadores = visor.value.split(/[0-9]/);
  let operador;
  operadores.forEach((x) => {
    if (x != "") operador = x;
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador);
}
