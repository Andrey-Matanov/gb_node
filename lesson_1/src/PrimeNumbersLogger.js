const colors = require("colors/safe");

class PrimeNumbersLogger {
    constructor(start, end) {
        this.start = start; // Левый предел диапозона чисел
        this.end = end; // Правый предел диапозона чисел
    }

    isPrime(number) {
        // Проверяет что число является простым
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }

    logPrimeNumbers() {
        // Выводит простые числа из заданного диапозона чисел в консоль, окрашивая их в красный, желтый, зеленый цвета
        let counter = 0;
        let current = this.start;

        while (current <= this.end) {
            if (this.isPrime(current)) {
                counter % 3 == 0
                    ? console.log(colors.green(current))
                    : counter % 3 == 1
                    ? console.log(colors.yellow(current))
                    : console.log(colors.red(current));

                counter === 2 ? (counter = 0) : counter++;
                current++;
            } else {
                current++;
            }
        }
    }
}

module.exports = {
    PrimeNumbersLogger,
};
