// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

// app
import App from './containers/App';
import './config';
import 'normalize.css';

// settings
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);