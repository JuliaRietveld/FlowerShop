'use strict';

// Declare app level module which depends on views, and components
angular.module('myStore', [
  'ngRoute',
  'myStore.bouqets'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/bouqets'});
}]);
