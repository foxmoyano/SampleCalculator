var app = angular.module('calculatorApp', []);

app.controller('CalculatorController', function($scope) {
  let inputString = '';

  $scope.number = function(value) {
    inputString += value;
    $scope.result = inputString;
  };

  $scope.clear = function() {
    inputString = '';
    $scope.result = '';
  };

  $scope.calculate = function() {
    const result = eval(inputString);
    $scope.result = result;
  };
});
