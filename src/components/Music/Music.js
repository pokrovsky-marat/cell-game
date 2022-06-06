import './Music.css';
import {StoreContext} from '../StoreProvider/StoreProvider';
import React, {useContext} from 'react';
import soundOn from './../../img/music.svg';
import soundOff from './../../img/music-off.svg';

const Music = React.memo(({sound}) => {
    let store = useContext(StoreContext);
    return (
        <button onClick={store.toggleSound} className="music">
            <img src={sound ? soundOn : soundOff} width="40"
                 height="100" alt=""/>
        </button>);
});

export default Music;
