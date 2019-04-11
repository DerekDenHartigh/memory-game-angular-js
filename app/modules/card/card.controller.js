class CardController {
  constructor() {}

  /**
   * Handles the card click on the card level
   * Then alerts the parent a click has occurred
   */
  handleCardClick($event) {
    if (this.isMatched) { return; } // ignore if matched card
    this.isFlipped = !this.isFlipped;
    this.onCardClick($event, this);
  }
}

CardController.$inject = [];

export default CardController;