var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  function($scope, mainCharacter) {
    $scope.myFirstName = 'Chaz';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
  }
]);