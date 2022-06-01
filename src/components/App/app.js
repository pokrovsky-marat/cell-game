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
            <div className="pt-3">
                {store.isGameStarted ? '' :
                    <>
                        <div className="d-flex justify-content-center mt-3">
                            <StartGameButton/>
                        </div>
                        <ChooseLevel/>
                    </>
                }

                {cellRows}
                {store.isGameStarted ?
                    <div className={'text-center mt-4'}>
                        <RestartGameButton/>
                    </div> : ''}

                {store.isGameOver ?
                    <div className={'text-center fs-5 mt-3'}>
                        <GameResult/>
                    </div> : ''}


            </div>
        );
    }
);
export {App};