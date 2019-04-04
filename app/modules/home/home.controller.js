class HomeController {
  constructor(MessageService) {
    // localize variables
    this.MessageService = MessageService;
    this.newMessage = "";
  }
  $onInit() {
    // initialize variables
    this.MessageService.addMessage('Hello world!');
    this.messages = this.MessageService.messages;
  }

  addMessage(message) {
    if (typeof message === 'undefined' || message === null || message.length === 0) {
      return;
    }

    this.MessageService.addMessage(message);
  }
}

HomeController.$inject = ['MessageService'];

export default HomeController;