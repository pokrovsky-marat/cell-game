function shuffle(array) {
    for (let j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x) ;
    return array;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(a))