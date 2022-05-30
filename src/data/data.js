import {shuffleArray, doubleItems} from '../utils/utils';

//Звуки игры
let clickSound = new Audio('./sounds/click.mp3');
let clickSoundSuccess = new Audio('./sounds/success_click.mp3');
let applause = new Audio('./sounds/s-aplodismentami.mp3');
let startGame = new Audio('./sounds/start-game.mp3');

let images = ['alarm.svg',
    'cloud-drizzle.svg',
    'emoji-smile.svg',
    'globe.svg',
    'hand-thumbs-up.svg',
    'heart.svg',
    'telephone.svg',
    'yin-yang.svg'];
export default function getData(countOfCells) {
    //Перемешиваем массив названий картинок
    let cells = shuffleArray(images);
    //Выбираем количество элементов в зависимости от уровня
    cells = cells.slice(0, countOfCells);
    //Дублируем и снова перемешиваем их
    cells = shuffleArray(doubleItems(cells));
    return cells.map((item, idx) => ({id: idx, isClicked: true, img: item}));
}
export {clickSound, clickSoundSuccess, applause, startGame};


