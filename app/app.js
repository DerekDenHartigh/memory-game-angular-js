import './services/services.module.js';
import './modules/shared/shared.module.js';
import './modules/home/home.module.js';

// Declare app level module which depends on views, and core components
angular.module('recipeSearch', [
  'ngRoute',
  'services',
  'home',
  'shared',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);