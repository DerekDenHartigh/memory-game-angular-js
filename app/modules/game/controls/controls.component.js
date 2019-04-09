import GameControlsController from './controls.controller.js';

class GameControlsComponent {
  constructor(){
    this.templateUrl = './modules/game/controls/controls.html';
    this.controller = GameControlsController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      start: '&',
      pause: '&',
      reset: '&'
    };
  }
}

export default GameControlsComponent;