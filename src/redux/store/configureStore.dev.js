import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );

  const store = createStore(rootReducer, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    });
  }

  return store;
}

export default configureStore;
