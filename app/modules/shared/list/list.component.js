import ListController from './list.controller.js';

class ListComponent {
  constructor() {
    this.controller = ListController;
    this.templateUrl = './modules/shared/list/list.html';
    this.controllerAs = 'ctrl';
    this.bindings = {
      listItems: '<',
    };
  }
}

export default ListComponent;