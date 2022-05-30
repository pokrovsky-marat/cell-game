import {store} from '../../store/store';
import {pickEndingForRuWordStep} from '../../utils/utils';

let GameResult = () => {
    let cnt = store.amountOfMoves;
    return (
        <>
            {store.gameOver()}
            <p>Поздравляю вы закончили игру
                за {cnt} {pickEndingForRuWordStep(cnt)}</p>
        </>
    );
};
export {GameResult};