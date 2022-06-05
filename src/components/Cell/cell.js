import React, {useContext} from 'react';
import './cell.css';

import {observer} from 'mobx-react-lite';
import {StoreContext} from '../StoreProvider/StoreProvider';

const Cell = observer(({id, img, isClicked}) => {
    let store = useContext(StoreContext);
    let onClickHandler = () => {
        store.cellClickHandler(id);
    };
    let frontSideStyle = isClicked ? 'front front-clicked' : 'front';
    let backSideStyle = isClicked ? 'back back-clicked' : 'back';
    return (
        <div onClick={onClickHandler} className="cell">
            <div className={frontSideStyle}>
                <img width='100' height='100' className='front-img' alt=''  src={`./img/${img}`}/>
            </div>
            <div className={backSideStyle}>
                <img width="30" height='100' alt='' src={`./img/PLAYING_CARD_BACK.svg`}/>
            </div>
        </div>);
});

export default Cell;
