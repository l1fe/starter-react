import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Items, Item } from 'containers';
import { Navbar } from 'components';

import styles from './styles.scss';

const navItems = [
  { id: 'home', title: 'Home', to: '/' },
  { id: 'items', title: 'Items', to: '/items' },
];

const Main = () => (
  <div>
    <Navbar title="Boilerplate" items={navItems} />

    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route path="/items/:id" component={Item} />
      </Switch>
    </div>
  </div>
);

export default Main;
