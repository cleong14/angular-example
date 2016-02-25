var myApp = angular.module('myApp');

myApp.controller('MyController',['$scope', function($scope) {
  $scope.myFirstName = 'Chaz';

  $scope.myModel = 'Ready Player One';
}]);