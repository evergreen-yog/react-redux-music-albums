import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { throttle } from 'lodash';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { App } from './App';
import { loadState, saveState } from './localStorage';
import { initialState } from './features/Albums/ducks';

import './styles.css';

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware),
);
store.subscribe(
  throttle(
    () =>
      saveState({
        albums: {
          ...initialState,
          saved: store.getState().albums.saved,
        },
      }),
    1000,
  ),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
