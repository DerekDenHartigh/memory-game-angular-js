import GameControlsComponent from './controls/controls.component.js';
import GameComponent from './game.component.js';

angular.module('game', [])

.component('gameControls', new GameControlsComponent())
.component('game', new GameComponent());