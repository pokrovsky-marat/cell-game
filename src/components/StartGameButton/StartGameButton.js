import {store} from '../../store/store';

let StartGameButton = () => {
    return (
        <button onClick={() => {
            store.startGame();
        }} className={'btn btn-secondary btn-lg'}>Начать Игру
        </button>
    );
};
export {StartGameButton};