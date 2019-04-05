import GameController from './game.controller.js';

class GameComponent {
  constructor(){
    this.templateUrl = './modules/game/game.html';
    this.controller = GameController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      difficulty: '<'
    }
  }
}

export default GameComponent;