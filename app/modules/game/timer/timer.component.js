import GameTimerController from './timer.controller.js';

class GameTimerComponent {
  constructor(){
    this.templateUrl = './modules/game/timer/timer.html';
    this.controller = GameTimerController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      timer: '<'
    };
  }
}

export default GameTimerComponent;