import CardComponent from './card.component.js';

// angular.module('card', ['ngRoute']) // I don't think I need this
angular.module('card', [])

.component('card', new CardComponent())

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     template: '<home></home>',
//   });
// }]);