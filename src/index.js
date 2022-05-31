import * as ReactDOM from 'react-dom';
import React from 'react';
import {App} from './components/App/app';
import {store} from './store/store';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));