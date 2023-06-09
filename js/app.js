var app = angular.module('calculatorApp', []);

app.controller('CalculatorController', function($scope) {
  let inputString = '';
  $scope.operacion = '+';

  $scope.number = function(value) {
    inputString += value;
    $scope.result = inputString;
  };

  $scope.clear = function() {
    inputString = '';
    $scope.result = '';
  };

  $scope.calculate = function() {    
    const result = $scope.evaluarExpresion(inputString);
    $scope.result = result;  
  };

  $scope.evaluarExpresion = function(expresion) {
    let numeros = [];
    let operadores = [];
    
    const precedencia = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    };

    if ( expresion === '')
      return;
        
    expresion = expresion.replace(/\s/g, '');
    let numerosRegExp = /\d+(\.\d+)?/g;
  
    let numeroMatches = expresion.match(numerosRegExp);
    for (let i = 0; i < numeroMatches.length; i++) {
      numeros.push(parseFloat(numeroMatches[i]));
    }
  
    let operadorMatches = expresion.match(/[+\-*/]/g);
    for (let i = 0; i < operadorMatches.length; i++) {
      let operador = operadorMatches[i];
  
      while (operadores.length > 0 && precedencia[operador] <= precedencia[operadores[operadores.length - 1]]) {
        let num2 = numeros.pop();
        let num1 = numeros.pop();
        let operadorAnterior = operadores.pop();
        let resultado = $scope.realizarOperacion(operadorAnterior, num1, num2);
        numeros.push(resultado);
      }
      operadores.push(operador);
    }
  
    while (operadores.length > 0) {
      let num2 = numeros.pop();
      let num1 = numeros.pop();
      let operador = operadores.pop();
      let resultado = $scope.realizarOperacion(operador, num1, num2);
      numeros.push(resultado);
    }
  
    return numeros.pop();
  };  

  $scope.realizarOperacion = function(operador, num1, num2) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  };  
});
