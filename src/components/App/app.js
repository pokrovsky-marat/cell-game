import {observer} from 'mobx-react-lite';
import {store} from '../../store/store';
import {chunkArray, pickEndingForRuWordStep} from '../../utils/utils';
import RenderTableRow from '../RenderTableRow/RenderTableRow';

const App = observer(() => {
        return (
            <div className="app">
                <h1 className="text-center mt-3">Угадайка</h1>
                <p className="text-center fs-5">Запомните расположение клеточек, и кликайте последовательно на одинаковые
                    картинки</p>
                <div className={'text-center'}>
                    {store.isGameStarted ? ''
                        : <button onClick={() => {
                            store.startGame();
                        }} className={'mb-3 btn btn-secondary btn-lg'}>Начать Игру
                        </button>
                    }

                </div>
                {/*Перед тем как мапить массив, делим его на 4 под массива*/}
                {chunkArray(store.cells, 4).map((row, idx) => (<RenderTableRow
                    key={idx}
                    row={row}/>))}
                {/*Условие окончания игры*/}
                {(store.cells.length === store.cells.filter(item => item.isClicked).length) && store.isGameStarted ?
                    <div className={'text-center fs-5 mt-3'}>
                        {store.gameOver()}
                        <p className={'text-center'}>Поздравляю вы закончили игру
                            за {store.amountOfMoves} {pickEndingForRuWordStep(store.amountOfMoves)}</p>
                        <button onClick={() => {
                            store.restartGame();
                        }} className={'btn btn-secondary btn-large'}>Начать Новую Игру
                        </button>
                    </div> : ''}
            </div>
        );
    }
);
export {App}