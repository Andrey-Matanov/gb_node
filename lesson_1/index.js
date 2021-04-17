const { PrimeNumbersLogger } = require("./src/PrimeNumbersLogger");

const start = +process.argv[2];
const end = +process.argv[3];
const logger = new PrimeNumbersLogger(start, end);

logger.logPrimeNumbers();
