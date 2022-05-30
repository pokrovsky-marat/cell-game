import {observer} from 'mobx-react-lite';
import {store} from '../../store/store';
import {chunkArray, pickEndingForRuWordStep} from '../../utils/utils';
import RenderTableRow from '../RenderTableRow/RenderTableRow';
import {StartGameButton} from '../StartGameButton/StartGameButton';
import {RetartGameButton} from '../RetartGameButton/RetartGameButton';


const App = observer(() => {
        return (
            <div>
                <div className={'text-center mt-3 mb-3'}>
                    {store.isGameStarted ? ''
                        : <StartGameButton/>
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
                        <RetartGameButton/>
                    </div> : ''}
            </div>
        );
    }
);
export {App};