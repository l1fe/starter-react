import { example } from '../types';

const fetchItems = () => ({
  type: example.fetchItems.request,
});

export default {
  fetchItems,
};
