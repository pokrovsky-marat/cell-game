import {observer} from 'mobx-react-lite';
import {store} from '../../store/store';
import {chunkArray, pickEndingForRuWordStep} from '../../utils/utils';
import RenderTableRow from '../RenderTableRow/RenderTableRow';
import {StartGameButton} from '../StartGameButton/StartGameButton';
import {RetartGameButton} from '../RetartGameButton/RetartGameButton';
import {GameResult} from '../GameResult/GameResult';


const App = observer(() => {
        //Все клетки открыты и игра началась, значит игра закончена
        let isGameOver = (store.cells.length === store.cells.filter(item => item.isClicked).length) &&
            store.isGameStarted;
        return (
            <div>
                <div className={'text-center mt-3 mb-3'}>
                    {store.isGameStarted ? '' : <StartGameButton/>}
                </div>
                {/*Перед тем как мапить массив, делим его на 4 под массива*/}
                {chunkArray(store.cells, 4).map((row, idx) => (<RenderTableRow
                    key={idx}
                    row={row}/>))}

                {isGameOver ?
                    <div className={'text-center fs-5 mt-3'}>
                        <GameResult/>
                        <RetartGameButton/>
                    </div> : ''}
            </div>
        );
    }
);
export {App};