//MobX
import {makeAutoObservable} from 'mobx';
import getData, {applause, startGame, clickSound, clickSoundSuccess} from '../data/data';

class Store {
    //В массиве settings будут хр. настройки игры, от 0 самый легкий до 4 самый сложный
    settings = [{countOfCells: 8, rows: 2},
        {countOfCells: 12, rows: 3},
        {countOfCells: 16, rows: 4},
        {countOfCells: 20, rows: 4},
        {countOfCells: 24, rows: 4}];
    //По умолчанию будут средний уровень
    level = 3;
    cells = getData(this.settings[this.level].countOfCells);
    currentCell = null;
    isGameStarted = false;
    //Количество ходов сделанных игроком
    amountOfMoves = 0;

    constructor() {
        makeAutoObservable(this);
    }

    startGame = () => {
        startGame.load();
        startGame.play();
        this.cells.map(item => item.isClicked = false);
        this.isGameStarted = true;
    };
    restartGame = () => {
        this.cells = getData();
        this.isGameStarted = false;
        this.amountOfMoves = 0;

    };
    gameOver = () => {
        applause.load();
        applause.play();
    };

    cellClickHandler = (id) => {
        //Если клетка уже открыта ничего не делать
        if (this.cells[id].isClicked) return;

        this.cells[id].isClicked = true;
        clickSound.load();
        clickSound.play();
        this.amountOfMoves++;
        //Если это не первый ход, то
        if (this.currentCell) {
            //Если изображения не совпадают
            if (this.currentCell.img !== this.cells[id].img) {
                this.currentCell.isClicked = false;
                this.currentCell = this.cells[id];
                //Если изображения совпадают
            } else {
                this.currentCell = null;
                clickSoundSuccess.load();
                clickSoundSuccess.play();
            }
            //Если это первый ход
        } else {
            this.currentCell = this.cells[id];
        }
    };
}

let store = new Store();
export {store};