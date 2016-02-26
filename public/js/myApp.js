angular.module('myApp', ['ngRoute']);

// good practice to always use myApp and use angular to go and fetch it
var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider, MoviesProvider) {
    // set up configuration
    MoviesProvider.setEndpoint('/api');

    // Routes
    $routeProvider
      .when('/404', {
        templateUrl: '/templates/404.html'
      })
      .otherwise('/404');
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
      // start application
      $rootScope.version = APP_VERSION;
    }
  ]);