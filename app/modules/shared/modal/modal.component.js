import ModalController from './modal.controller.js';

class ModalComponent {
  constructor(){
    this.templateUrl = './modules/shared/modal/modal.html';
    this.controller = ModalController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      showModal: '<',
      modalTitle: '<',
    };
  }
}

export default ModalComponent;