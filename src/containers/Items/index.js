import React from 'react';

import { List } from 'components';

const items = [...new Array(100)].map((val, i) => ({
  id: i,
  title: `Item ${i}`,
  link: `/items/${i}`,
}));

const Items = () => (
  <div>
    <h2>Items</h2>
    <List items={items} />
  </div>
);

export default Items;
