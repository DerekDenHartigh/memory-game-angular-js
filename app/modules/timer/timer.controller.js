class TimerController {
    constructor($interval) {
        this.$interval = $interval;
        this.interval;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }

    $onInit() {
        console.log('Timer Controller Initialized: ', this);
    }

    start() {
        if (!this.interval) {
            this.interval = this.$interval(() => {
                this.milliseconds += 5;
                if (this.milliseconds >= 999) {
                    this.milliseconds = this.milliseconds - 999;
                    this.seconds += 1;

                    if (this.seconds === 59) {
                        this.minutes += 1;
                        this.seconds = 0;
                        if (this.minutes === 59) {
                            this.hours += 1;
                            this.minutes = 0;
                        }
                    }
                }
                // this.setupTimerHTML();
                console.log(this.getFullTimerString());
            }, 5);
        }
    }

    getTimeString(timeType, zeroPadStart) {
        return timeType.toString().padStart(zeroPadStart, '0');
    }

    getFullTimerString() {
        return `${this.getTimeString(this.hours, 2)}:${this.getTimeString(this.minutes, 2)}:${this.getTimeString(this.seconds, 2)}:${this.getTimeString(this.milliseconds, 3)}`;
    }
}

TimerController.$inject = ['$interval'];

export default TimerController;