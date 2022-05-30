import React from 'react';
import './cell.css';
import {observer} from 'mobx-react-lite';
import {store} from '../../store/store';

//observer функция которая оборачивает наш реакт-компонент
const Cell = observer(({id, img, isClicked}) => {
    return (
        <div onClick={() => {
            store.cellClickHandler(id);
        }} className="cell">
            <div className={`front ${isClicked ? 'front-clicked' : ''}`}>
                <img width="70px" src={`./img/${img}`}/>
            </div>
            <div className={`back ${isClicked ? 'back-clicked' : ''}`}>
                <img width="30px" src={`./img/PLAYING_CARD_BACK.svg`}/>

            </div>
        </div>);
});

export default Cell;
