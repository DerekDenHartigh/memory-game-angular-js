import GameComponent from './game.component.js';

// angular.module('card', ['ngRoute']) // I don't think I need this
angular.module('game', [])

.component('game', new GameComponent())

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     template: '<home></home>',
//   });
// }]);