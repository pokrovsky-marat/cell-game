import {StoreContext} from '../StoreProvider/StoreProvider';
import React, {useContext} from 'react';


let RestartGameButton = React.memo(() => {
    let store = useContext(StoreContext);
    return (
        <button onClick={() => {
            store.restartGame();
        }} className={'btn btn-secondary btn-large'}>Начать Новую игру
        </button>
    );
});
export {RestartGameButton};