import {pickEndingForRuWordStep} from '../../utils/utils';
import {StoreContext} from '../StoreProvider/StoreProvider';
import {useContext} from 'react';

let GameResult = ({amountOfMoves}) => {
    let store = useContext(StoreContext)

    return (
        <>
            {store.gameOver()}
            <p>Поздравляю вы закончили игру
                за {amountOfMoves} {pickEndingForRuWordStep(amountOfMoves)}</p>
        </>
    );
};
export {GameResult};