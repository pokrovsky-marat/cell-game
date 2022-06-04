import {StoreContext} from '../StoreProvider/StoreProvider';
import {useContext} from 'react';


let StartGameButton = () => {
    let store = useContext(StoreContext)
    return (
        <button onClick={() => {
            store.startGame();
        }} className={'btn btn-secondary btn-lg'}>Начать Игру
        </button>
    );
};
export {StartGameButton};