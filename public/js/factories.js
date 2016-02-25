var myApp = angular.module('myApp');

myApp.factory('CharacterVersionFactory', [
  'mainCharacter',
  'APP_VERSION',
  function (mainCharacter, APP_VERSION) {
    var characterVersion = mainCharacter + ' ' + APP_VERSION;
    return characterVersion;
  }
]);