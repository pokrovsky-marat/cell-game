import {StoreContext} from '../StoreProvider/StoreProvider';
import {useContext} from 'react';


let RestartGameButton = () => {
    let store = useContext(StoreContext)
    return (
        <button onClick={() => {
            store.restartGame();
        }} className={'btn btn-secondary btn-large'}>Начать Новую игру
        </button>
    );
};
export {RestartGameButton};