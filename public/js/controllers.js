var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  function($scope, mainCharacter, CharacterVersionFactory) {
    $scope.myFirstName = 'Chaz';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
  }
]);