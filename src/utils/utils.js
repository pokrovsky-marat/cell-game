//Изменение окончания слова "ход" в зависимости от их количества
//До ста работает корректно
function pickEndingForRuWordStep(number) {
    let lastDigit = number % 10;
    if (lastDigit === 1) return 'ход';
    else if (lastDigit < 5 && lastDigit > 1) return 'хода';
    else return 'ходов';
}

//Продублировать элементы массива
function doubleItems(arr) {
    return arr.concat(arr);
}

//Перемешать элементы массива
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

//Создание многомерного массива из одномерного
let chunkArray = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);
export {doubleItems, shuffleArray, chunkArray, pickEndingForRuWordStep};