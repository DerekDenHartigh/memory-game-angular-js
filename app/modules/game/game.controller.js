class GameController {
  constructor(GameService) {
    this.GameService = GameService;
  }

  $onInit() {
    console.log('Game Controller Initialized', this);
    this._setUpGame();
  }

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
}

GameController.$inject = ['GameService'];

export default GameController;