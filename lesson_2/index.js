// Запуск программы: npm start timer1, timer2, ..., timerN, где timer - дата и время в следующем формате: 2021-05-04T14:03:00 (год-месяц-числоTчас-минута-секунда)

const Timer = require("./src/Timer");
const TimerEmitter = require("./src/TimerEmitter");
const { clear_console } = require("./src/utils");

const emitter = new TimerEmitter();
const dates = process.argv.splice(2);

clear_console();
for (let date of dates) {
    emitter.emit("add", new Timer(date));
}

emitter.emit("start");
