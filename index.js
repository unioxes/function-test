function greet(name, hour) {
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Доброе утро";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Добрый день";
    } else if (hour >= 18 && hour < 22) {
        greeting = "Добрый вечер";
    } else {
        greeting = "Доброй ночи";
    }

    return `${greeting}, ${name}!`;
}

module.exports = greet