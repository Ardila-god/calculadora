function calculadora(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'por favor, ingrese datos validos'; 
    }  else {
        if (operacion == 'suma'){
            resultado = num1 + num2;
        } else if (operacion == 'resta'){
            resultado = num1 - num2;
        } else if (operacion == 'multiplicacion'){
            resultado = num1 * num2;
        }    else if (operacion == 'division'){
                if  (num2 === 0) {
                    resultado = 'no se puede dividir por cero'
                } else {
                    resultado = num1 / num2;
                }
            }
    }
    document.getElementById('resultado').innerHTML = resultado;
}

function calculateTrig(func) {
    let value = parseFloat(document.getElementById('display').value);
    let result;
    if (func === 'sin') result = Math.sin(value);
    if (func === 'cos') result = Math.cos(value);
    if (func === 'tan') result = Math.tan(value);
    document.getElementById('display').value = result;
  }
  
  function calculateLog() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log(value);
  }
  
  function calculatePower() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2);
  }
  
  function calculateSqrt() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(value);
  }
  