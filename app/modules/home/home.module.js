import HomeComponent from './home.component.js';

angular.module('home', ['ngRoute'])

.component('home', new HomeComponent())

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    template: '<home></home>',
  });
}]);