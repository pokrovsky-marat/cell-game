import {pickEndingForRuWordStep} from '../../utils/utils';
import {StoreContext} from '../StoreProvider/StoreProvider';
import React, {useContext} from 'react';

let GameResult = React.memo(({amountOfMoves}) => {
    let store = useContext(StoreContext);
    store.gameOver();
    return (
        <p>Поздравляю вы закончили игру за {amountOfMoves} {pickEndingForRuWordStep(amountOfMoves)}</p>
    );
});
export {GameResult};