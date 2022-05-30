import {shuffleArray, doubleItems} from '../utils/utils';

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
export default function getData() {
    //Дублируем, перемешиваем названия картинок, делаем из них объекты
    let cells = shuffleArray(doubleItems(images));
    return cells.map((item, idx) => ({id: idx, isClicked: true, img: item}));
}
export {clickSound, clickSoundSuccess,applause,startGame};


