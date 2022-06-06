import {StoreContext} from '../StoreProvider/StoreProvider';
import React, {useContext} from 'react';


let StartGameButton = React.memo(() => {
    let store = useContext(StoreContext);
    return (
        <button onClick={() => {
            store.startGame();
        }} className={'btn btn-secondary btn-lg'}>Начать Игру
        </button>
    );
});
export {StartGameButton};