const fs = require("fs");
const readline = require("readline");
const ora = require("ora");

/**
 * Построчно считывает файл access.log, ищет все логи, относящиеся к ip-адресам 89.123.1.41 и 34.48.240.111, и записывает эти логи в файл test.log. Если test.log не существует, он автоматически создается.
 */
async function readLogLineByLine() {
    const fileStream = fs.createReadStream("access1.log", { flags: "r" });
    const rl = readline.createInterface({
        input: fileStream,
    });
    const spinner = ora(
        "Файл считывается и необходимые логи записываются в соответствующие файлы\n\nОбработано 0 строк"
    ).start();

    let count = 0;
    let last = 0;

    const setSpinnerText = () => {
        interval = setTimeout(() => {
            spinner.text = `Файл считывается и необходимые логи записываются в соответствующие файлы.log\n\nОбработано ${count} строк`;

            if (last !== count) {
                setSpinnerText();
                last = count;
            } else {
                spinner.succeed("Обработка файла успешно завершена!");
            }
        }, 1000);
    };

    const writeLogs = (ip, line) => {
        fs.writeFileSync(
            `${ip}_requests.log`,
            `${line}\n`,
            { flag: "as" },
            (err) => {
                if (err) {
                    console.log(err);
                }
            }
        );
    };

    setSpinnerText();

    for await (const line of rl) {
        count++;

        if (
            line.startsWith("89.123.1.41") ||
            line.startsWith("34.48.240.111")
        ) {
            if (line.startsWith("89.123.1.41")) {
                writeLogs("89.123.1.41", line);
            } else {
                writeLogs("34.48.240.111", line);
            }
        }
    }
}

readLogLineByLine();
