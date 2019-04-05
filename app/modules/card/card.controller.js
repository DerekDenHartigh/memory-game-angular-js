class CardController {
  constructor(id, name, image, order) { 
    this.id = id;
    this.name = name;
    this.image = image;
    this.order = order;
  }
  $onInit() {
    console.log('Card Controller Initialized: ', this);
  }
}

CardController.$inject = [];

export default CardController;