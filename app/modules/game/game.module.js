import GameControlsComponent from './controls/controls.component.js';
import GameTimerComponent from './timer/timer.component.js';
import GameComponent from './game.component.js';

angular.module('game', [])

.component('gameControls', new GameControlsComponent())
.component('gameTimer', new GameTimerComponent())
.component('game', new GameComponent());