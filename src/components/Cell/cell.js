import React from 'react';
import './cell.css';
import {store} from '../../store/store';
import {observer} from 'mobx-react';

const Cell = observer(({id, img, isClicked}) => {
    let onClickHandler = () => {
        store.cellClickHandler(id);
    };
    let frontSideStyle = isClicked ? 'front front-clicked' : 'front';
    let backSideStyle = isClicked ? 'back back-clicked' : 'back';
    return (
        <div onClick={onClickHandler} className="cell">
            <div className={frontSideStyle}>
                <img className='front-img'  src={`./img/${img}`}/>
            </div>
            <div className={backSideStyle}>
                <img width="30px" src={`./img/PLAYING_CARD_BACK.svg`}/>
            </div>
        </div>);
});

export default Cell;
