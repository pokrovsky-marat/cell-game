import {store} from '../../store/store';

let RestartGameButton = () => {
    return (
        <button onClick={() => {
            store.restartGame();
        }} className={'btn btn-secondary btn-large'}>Начать Новую игру
        </button>
    );
};
export {RestartGameButton};