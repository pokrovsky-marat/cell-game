import {store} from '../../store/store';

let RestartGameButton = () => {
    return (
        <button onClick={() => {
            store.restartGame();
        }} className={'btn btn-secondary btn-large'}>Начать Новую Игру
        </button>
    );
};
export {RestartGameButton};