import Timer from '../../models/timer.js';

class GameController {
  constructor($interval, GameService) {
    this.$interval = $interval;
    this.interval;
    this.GameService = GameService;

    this.timer = new Timer();
    this.won = false;
    this.showModal = true;
  }

  $onInit() {
    this._setUpGame();
  }

  startGame() {
    if (!this.interval) {
      this.interval = this.$interval(() => {
        this.timer.start();
      }, 5);
    }
  }

  pauseGame() {
    if (this.interval) {
      this.$interval.cancel(this.interval);
      this.interval = undefined;
    }
  }

  resetGame() {
     this.pauseGame();
     this.timer = new Timer();
     this.won = false;
     this._setUpGame();
  }

  /**
   * Calls the game service to flip the card and then _handleWin
   * @param {Card} card The card that was clicked
   */
  handleCardClick(card) {
    if (this.GameService.flipCard(card)) {
      this._handleWin();
    }
  }


  /* Private Methods (methods that should not be used in the UI) go here */
  _setUpGame() {
    switch (this.difficulty) {
      case 'easy':
        this.GameService.init(10);
        break;
      case 'medium':
        this.GameService.init(20);
        break;
      case 'hard':
        this.GameService.init(40);
        break;
      case 'extra hard':
        this.GameService.init(100);
        break;
      default:
        this.GameService.createCards(20);
        break;
    }
  }

  _handleWin() {
    this.pauseGame();
    this.won = true;
  }
}

GameController.$inject = ['$interval', 'GameService'];

export default GameController;