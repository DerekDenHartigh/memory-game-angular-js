class MessageService {
  constructor() {
    this.messages = [];
  }

  addMessage(message) {
    this.messages.push(message);
  }

  removeMessage(message) {
    let i = 0,
      len = this.messages.length;

    for (i; i < len; i++) {
      if (this.messages[i] === message) {
        this.messages.splice(i, 1);
      }
    }
  }
}

MessageService.$inject = [];
export default MessageService;