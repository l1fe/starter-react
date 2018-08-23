import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from 'redux/store/configureStore';
import { Home } from 'containers';
import 'styles/base.scss';

const preloadedState = { };
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <h1>Hello, React</h1>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
