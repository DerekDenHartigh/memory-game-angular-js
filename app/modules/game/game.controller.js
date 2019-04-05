class GameController {
  constructor(numOfCards) { 
    this.numOfCards = numOfCards;
    // this.cards = [];
    this.matchedCards = [];
    this.flippedCards = [];
    // this.timer = new Timer();
  }

  $onInit() {
    this.cards = new Array(this.numOfCards);
    console.log('Game Controller Initialized: ', this);
  }

}

GameController.$inject = [];

export default GameController;