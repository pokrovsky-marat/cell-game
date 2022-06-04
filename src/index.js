import * as ReactDOM from 'react-dom';
import React from 'react';
import {App} from './components/App/app';
import {StoreProvider} from './components/StoreProvider/StoreProvider';


ReactDOM.render(<StoreProvider> <App/></StoreProvider>, document.getElementById('root'));