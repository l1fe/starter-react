import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'redux/store/configureStore';
import { Main } from 'containers';
import 'styles/base.scss';

const preloadedState = { };
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
