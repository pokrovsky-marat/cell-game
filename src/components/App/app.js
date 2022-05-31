import {observer} from 'mobx-react-lite';
import {chunkArray} from '../../utils/utils';
import RenderTableRow from '../RenderTableRow/RenderTableRow';
import {StartGameButton} from '../StartGameButton/StartGameButton';
import {RestartGameButton} from '../RestartGameButton/RestartGameButton';
import {GameResult} from '../GameResult/GameResult';
import {ChooseLevel} from '../ChooseLevel/ChooseLevel';

const App = observer(({store}) => {
        //Делим массив на подмассивы в зависимости от уровня игры и мапимся по полученному массиву массивов
        let countRows = store.settings[store.level].rows;
        let cellRows = chunkArray(store.cells, countRows).map((row, idx) => (<RenderTableRow
            key={idx}
            row={row}/>));
        return (
            <div>
                <div className={'text-center mt-3 mb-3'}>
                    {store.isGameStarted ? '' :
                        <>
                            <StartGameButton/>
                            <ChooseLevel/>
                        </>
                    }
                </div>
                {cellRows}
                {store.isGameOver ?
                    <div className={'text-center fs-5 mt-3'}>
                        <GameResult/>
                        <RestartGameButton/>
                    </div> : ''}
            </div>
        );
    }
);
export {App};