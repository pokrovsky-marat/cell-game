import {store} from '../../store/store';

let RetartGameButton = () => {
    return (
        <button onClick={() => {
            store.restartGame();
        }} className={'btn btn-secondary btn-large'}>Начать Новую Игру
        </button>
    );
};
export {RetartGameButton};