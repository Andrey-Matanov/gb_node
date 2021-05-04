const EventEmitter = require("events");

class TimerEmitter extends EventEmitter {
    constructor() {
        super();

        this.timers = [];
        this.on("add", (timer) => this.timers.push(timer));
        this.on("start", () => {
            const generateTimersReport = () => {
                const timer = setTimeout(() => {
                    let allTimersReport = "";
                    let timersEnded = 0;

                    this.timers.forEach((timer, index) => {
                        const timer_report = timer.generate_timer_report();
                        const time_left_report = timer.generate_time_left_report();

                        allTimersReport += `Таймер № ${index + 1}:\n`;
                        allTimersReport += timer_report;
                        allTimersReport += time_left_report;
                        if (
                            time_left_report === "Таймер закончен\n" ||
                            time_left_report === "Ошибка при создании таймера\n"
                        )
                            timersEnded++;
                        allTimersReport += "\n";
                    });

                    console.clear();
                    console.log(allTimersReport);
                    if (timersEnded < this.timers.length) {
                        generateTimersReport();
                    }
                }, 1000);
            };

            generateTimersReport();
        });
    }
}

module.exports = TimerEmitter;
