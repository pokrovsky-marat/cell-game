import React from 'react';
import {store} from '../../store/store';

let StoreContext = React.createContext();
let StoreProvider = (props) => {
    return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
};
export {StoreProvider, StoreContext};
