import HomeController from './home.controller.js';

class HomeComponent {
  constructor(){
    this.templateUrl = './modules/home/home.html';
    this.controller = HomeController;
    this.controllerAs = 'ctrl';

  }
}

export default HomeComponent;