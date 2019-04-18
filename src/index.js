import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from './App';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
