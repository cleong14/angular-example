angular.module('myApp', []);

// good practice to always use myApp and use angular to go and fetch it
var myApp = angular.module('myApp');

myApp
  .config(function () {
    // set up configuration
  })
  .run(function () {
    // start application
    console.log('starting...');
  });

  myApp.controller('MyController',['$scope', function($scope) {
    $scope.myFirstName = 'Chaz';
  }]);