import ModalController from './modal.controller.js';

class ModalComponent {
  constructor(){
    this.templateUrl = './modules/shared/modal/modal.html';
    this.controller = ModalController;
    this.controllerAs = 'ctrl';
    this.transclude = true;
    this.bindings = {
      showModal: '<',
      showButtonCancel: '<',
      showButtonSubmit: '<',
      buttonCancelText: '<',
      buttonSubmitText: '<',
      modalTitle: '<',
      modalContent: '<',
      onSubmit: '&',
    };
  }
}

export default ModalComponent;