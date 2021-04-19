const colors = require("colors/safe");
const PrimeNumbersLogger = require("./src/PrimeNumbersLogger");

const arguments = process.argv;

if (arguments.length === 4) {
    const first = +arguments[2];
    const second = +arguments[3];

    if (!Number.isNaN(first) && !Number.isNaN(second)) {
        const logger = new PrimeNumbersLogger(first, second);
        logger.logPrimeNumbers();
    } else {
        console.log(colors.red("Оба аргумента должны являться числом"));
    }
} else if (arguments.length === 3) {
    const first = +arguments[2];

    if (!Number.isNaN(first)) {
        const logger = new PrimeNumbersLogger(2, first);
        logger.logPrimeNumbers();
    } else {
        console.log(colors.red("Аргумент должен являться числом"));
    }
} else {
    console.log(
        colors.red(
            "Неверное число аргументов. В качестве аргументов используйте одно число number для поиска простых чисел в диапазоне [2; number], либо два числа number1 и number2 для поиска простых чисел в диапазоне [number1; number2]"
        )
    );
}
