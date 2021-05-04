class Timer {
    constructor(date) {
        this.currentTime = new Date();
        this.timer = new Date(date);
    }

    generate_timer_report() {
        const start_time_report = `Время задания таймера: ${this.currentTime.toLocaleDateString()} ${this.currentTime.toLocaleTimeString()}`;

        const end_time_report = `Время окончания таймера: ${this.timer.toLocaleDateString()} ${this.timer.toLocaleTimeString()}`;

        if (
            this.timer.toLocaleDateString() === "Invalid Date" ||
            this.timer.toLocaleTimeString() === "Invalid Date"
        ) {
            return "\n";
        } else {
            return start_time_report + "\n" + end_time_report + "\n";
        }
    }

    generate_time_left_report() {
        const secondsLeft = Math.floor((this.timer - new Date()) / 1000);

        if (isNaN(secondsLeft)) {
            return "Ошибка при создании таймера\n";
        } else if (secondsLeft <= 0) {
            return "Таймер закончен\n";
        } else {
            return `До окончания таймера ${secondsLeft} секунд\n`;
        }
    }
}

module.exports = Timer;
