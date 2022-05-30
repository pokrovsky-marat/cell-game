//MobX
import {makeAutoObservable} from 'mobx';
import getData, {applause, startGame, clickSound, clickSoundSuccess} from '../data/data';

class Store {
    cells = getData();
    currentCell = null;
    isGameStarted = false;
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
        if (this.currentCell) {
            if (this.currentCell.img !== this.cells[id].img) {
                this.currentCell.isClicked = false;
                this.currentCell = this.cells[id];
            } else {
                this.currentCell = null;
                clickSoundSuccess.load();
                clickSoundSuccess.play();
            }
        } else {
            this.currentCell = this.cells[id];
        }
    };
}

let store = new Store();
export {store};