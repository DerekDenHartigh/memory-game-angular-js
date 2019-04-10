import Timer from '../../../models/timer.js';

class GameTimerController {
    constructor() {
        this.timer = new Timer();
    }

    start() {
        return this.getFullTimerString();
    }

    getTimeString(timeType, zeroPadStart) {
        return timeType.toString().padStart(zeroPadStart, '0');
    }

    getFullTimerString() {
        return `${this.getTimeString(this.timer.hours, 2)}:${this.getTimeString(this.timer.minutes, 2)}:${this.getTimeString(this.timer.seconds, 2)}:${this.getTimeString(this.timer.milliseconds, 3)}`;
    }
}

GameTimerController.$inject = [];

export default GameTimerController;