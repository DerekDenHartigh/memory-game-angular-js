import CardController from './card.controller.js';

class CardComponent {
  constructor(){
    this.templateUrl = './modules/card/card.html';
    this.controller = CardController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      id: '<',
      name: '<',
      image: '<',
      isFlipped: '<',
      isMatched: '<',
      order: '<'
    }
  }
}

export default CardComponent;