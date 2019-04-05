import TimerController from './timer.controller.js';

class TimerComponent {
  constructor(){
    this.templateUrl = './modules/timer/timer.html';
    this.controller = TimerController;
    this.controllerAs = 'ctrl';
    this.bindings = {
      running: '<'
    }
  }
}

export default TimerComponent;