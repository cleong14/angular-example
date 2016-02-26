var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  'Movies',
  function($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) {
    $scope.myFirstName = 'Chaz';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
    $scope.books = BookService.getBooks();
    $scope.BookService = BookService;
    $scope.Movies = Movies;
  }
]);