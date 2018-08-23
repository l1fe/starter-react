import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from 'redux/store/configureStore';
import { Navbar } from 'components';
import { Home } from 'containers';
import 'styles/base.scss';

const preloadedState = { };
const store = configureStore(preloadedState);

const navItems = [
  { id: 'home', title: 'Home', to: '/' },
  { id: 'items', title: 'Items', to: '/items' },
];

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar title="Boilerplate" items={navItems} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
