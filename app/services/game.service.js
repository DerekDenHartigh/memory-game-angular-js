import Card from '../models/card.js';
import Timer from '../models/timer.js';
class GameService {
  /**
     * Tracks the progress of the game and manages the logic for it
     * @param {Number} numOfCards The number of cards the game should create
     */
  constructor(numOfCards = 20) {
    this.numOfCards = numOfCards;
    this.cards = [];
    this.matchedCards = [];
    this.flippedCards = [];
    this.IMAGE_DIR = '../../assets/images';

    this.timer = new Timer();
  }

  /**
   * Initializes the game
   */
  init(numOfCards) {
    this.numOfCards = numOfCards;
    this.createCards(numOfCards);
    this.setupTimer();
  }

  setupTimer() {
    this.timer.start();
  }

  /**
   * Creates an array of cards
   *
   */
  createCards(numOfCards) {
    let i = 1,
      group = 0,
      groupsOfTwenty = Math.floor(numOfCards / 20), // Because we have a possible 20 pairs
      kittens = [],
      puppies = [];
    // Empty out all arrays
    this.cards = [];
    this.matchedCards = [];
    this.flippedCards = [];

    do {
      for (i = 1; i <= 5; i++) {
        kittens.push(new Card(undefined, `kitten-${i}`, `${this.IMAGE_DIR}/kittens/${i}.png`));
        kittens.push(new Card(undefined, `kitten-${i}`, `${this.IMAGE_DIR}/kittens/${i}.png`));
        puppies.push(new Card(undefined, `puppy-${i}`, `${this.IMAGE_DIR}/puppies/${i}.png`));
        puppies.push(new Card(undefined, `puppy-${i}`, `${this.IMAGE_DIR}/puppies/${i}.png`));
      }

      group++;
    } while (group < groupsOfTwenty);

    let cuteBabes = [];
    kittens.forEach(kitten => cuteBabes.push(kitten));
    puppies.forEach(puppy => cuteBabes.push(puppy));

    // Set up initial cards
    for (i = 0; i < numOfCards; i++) {
      cuteBabes[i].id = i + 1;
      this.cards.push(cuteBabes[i]);
    }

    this.shuffleCards();
  }

  /**
   * Shuffles the order of the cards
   */
  shuffleCards() {
    let chosenNumbers = [];

    for (let i = 0; i < this.cards.length; i++) {
      let chosenNumber = Math.floor(Math.random() * this.numOfCards) + 1;

      while (chosenNumbers.indexOf(chosenNumber) > -1) {
        chosenNumber = Math.floor(Math.random() * this.numOfCards) + 1;
      }

      if (chosenNumbers.indexOf(chosenNumber) === -1) {
        this.cards[i].order = chosenNumber;
        chosenNumbers.push(chosenNumber);
      }
    }
  }

  /**
   *  Handles the card flip game logic
   * @param {Card} card The card that is being flipped
   */
  flipCard(card) {
    // We don't want to do anything on matched cards
    if (card.isMatched === true) { return; }

    // Flip the card front or back
    card.isFlipped = !card.isFlipped;

    if (card.isFlipped) { // If we are flipping the card to its image, check for matches
      // Add card to array of flipped cards
      this.flippedCards.push(card);

      // Check if two flipped cards match
      if (this.flippedCards.length === 2) {
        this.checkForMatch(this.flippedCards);
        this.checkForWin();
      }

      // Flip the first two cards back if we have more than 2
      if (this.flippedCards.length > 2) {
        this.flipCardsBack(this.flippedCards);
      }
    }

    if (!card.isFlipped) { // If we are flipping the card back to its front, make sure the appropiate arrays are updated
      let cardToFlip, i = 0;
      // Find the card in the flipped cards and remove it, placing it into cardToFlip
      for (i = 0; i < this.flippedCards.length; i++) {
        if (this.flippedCards[i].id === card.id) {
          // Splice returns an array, we just want one item
          cardToFlip = this.flippedCards.splice(i, 1)[0];
          break; // Again, we just want one item, so we can stop looping on finding and storing a match
        }
      }
      this.findCardInGameDeck(cardToFlip.id).isFlipped = false;
    }
  }

  /**
   * Removes the first two cards in the array, then flips them in the game's array as well
   * @param {Array} flippedCards An array of flipped cards
   */
  flipCardsBack(flippedCards) {
    let card1 = flippedCards.shift(),
      card2 = flippedCards.shift();
    this.findCardInGameDeck(card1.id).isFlipped = false;
    this.findCardInGameDeck(card2.id).isFlipped = false;
  }

  /**
   * Checks for a matched set of cards by popping them off the passed in array
   * @param {Array} cardsToCheck An array of cards to check, expects 2
   */
  checkForMatch(cardsToCheck) {
    if (cardsToCheck[0].name === cardsToCheck[1].name) {
      let card1 = cardsToCheck.pop(),
        card2 = cardsToCheck.pop();
      card1.isMatched = true;
      card2.isMatched = true;
      this.matchedCards.push(card1, card2);
      return true;
    }
    return false;
  }

  checkForWin() {
    if (this.matchedCards.length === this.cards.length) {
      this.pauseGame();
      setTimeout(() => {
        alert(`You've won with a time of: ${this.timer.getFullTimerString()}`);
      }, 100);
    }
  }

  /**
   * The game keeps track of the entire deck, so this function lets us search it quickly by card id
   */
  findCardInGameDeck(cardId) {
    for (let card of this.cards) {
      if (card.id === cardId) {
        return card;
      }
    }
  }

  start(){
    console.log('game srvice start called: ');
  }
  pause() {
    console.log('game service pause called');
  }
  reset() {
    console.log('game service reset called');
  }
}

export default GameService;