import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux/store/configureStore';
import 'styles/base.scss';

const preloadedState = { };
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello, React!</h1>
    </div>
  </Provider>
);

export default App;
