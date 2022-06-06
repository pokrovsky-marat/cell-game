//MobX
import {makeAutoObservable} from 'mobx';
import getData, {applause, startGame, clickSound, clickSoundSuccess} from '../data/data';

class Store {
    //В массиве settings будут хр. настройки игры, от 0 самый легкий до 4 самый сложный
    settings = [{countOfCells: 4, rows: 4, description: 'Лёгкий'},
        {countOfCells: 6, rows: 4, description: 'Нормальный'},
        {countOfCells: 8, rows: 4, description: 'Средний'},
        {countOfCells: 10, rows: 4, description: 'Сложный'},
        {countOfCells: 12, rows: 6, description: 'Мастер'}];
    //По умолчанию будут средний уровень
    level = 1;
    cells = getData(this.settings[this.level].countOfCells);
    currentCell = null;
    isGameStarted = false;
    //Количество ходов сделанных игроком
    amountOfMoves = 0;
    isSoundOn = true;

    constructor() {
        makeAutoObservable(this);
    }

    get isGameOver() {
        return (this.cells.length === this.cells.filter(item => item.isClicked).length) &&
            this.isGameStarted;
    }

    startGame = () => {
        if (this.isSoundOn) {
            startGame.load();
            startGame.play();
        }
        this.cells.map(item => item.isClicked = false);
        this.isGameStarted = true;
    };
    changeLevel = (level) => {
        this.level = level;
        this.restartGame();
    };
    restartGame = () => {
        this.cells = getData(this.settings[this.level].countOfCells);
        this.isGameStarted = false;
        this.amountOfMoves = 0;

    };
    gameOver = () => {
        if (this.isSoundOn) {
            applause.load();
            applause.play();
        }
    };
    cellClickHandler = (id) => {
        //Если клетка уже открыта ничего не делать
        if (this.cells[id].isClicked) return;

        this.cells[id].isClicked = true;
        if (this.isSoundOn) {
            clickSound.load();
            clickSound.play();
        }
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
                if (this.isSoundOn) {
                    clickSoundSuccess.load();
                    clickSoundSuccess.play();
                }
            }
            //Если это первый ход
        } else {
            this.currentCell = this.cells[id];
        }
    };
    toggleSound = () => {
        this.isSoundOn = !this.isSoundOn;
    };
}

let store = new Store();
export {store};