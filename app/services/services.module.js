import GameService from './game.service.js';
import MessageService from './messages.service.js';

angular.module('services', [])
.service('GameService', GameService)
.service('MessageService', MessageService);