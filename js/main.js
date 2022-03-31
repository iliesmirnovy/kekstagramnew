function getRandomIntFromRange(value1, value2) {
    // Проверяем переданы ли в функцию числа
    if (typeof(value1) !== 'number' || typeof(value2) !== 'number') {
        return console.log('В функцию передано не число');
    }
    // Определяем минимальное и маскимальное число
    let valueMin = value1;
    let valueMax = value2;
    if (valueMin > valueMax) {
        valueMin = valueMax;
        valueMax = value1; 
    }
    // Возвращаем случайное целое число из диапазона
    return Math.max(Math.min(Math.floor(Math.random()*valueMax), valueMax), valueMin);
}

function checkStringLength(string, maxLength) {
    // Проверяем передана ли в функцию строка
    if (typeof(string) !== 'string') {
        return console.log('В функцию передана не строка для проверки');
    }
    // Возвращаем true, если длинна строки меньше maxLength
    return console.log(string.length >= maxLength ? true : false);
}