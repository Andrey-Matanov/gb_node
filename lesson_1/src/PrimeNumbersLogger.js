const colors = require("colors/safe");

class PrimeNumbersLogger {
    // this.start - Левый предел числового диапазона чисел
    // this.end - Правый предел числового диапазона чисел
    // this.primeNumberWasFound - Показывает, что хотя бы одно простое число было найдено

    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.primeNumberWasFound = false;
    }

    isPrime(number) {
        // Проверяет что число является простым

        if (number < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        this.primeNumberWasFound = true;
        return true;
    }

    logPrimeNumbers() {
        // Выводит простые числа из заданного диапазона чисел в консоль, окрашивая их в красный, желтый, зеленый цвета

        console.log(`Заданный диапазон чисел: [${this.start}, ${this.end}]`);

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

        if (this.primeNumberWasFound === false) {
            console.log(
                colors.red("В пределах заданного диапазона чисел нет простых")
            );
        }
    }
}

module.exports = PrimeNumbersLogger;
