import { api } from '../../types';

export const fetch = () => ({
  type: api.todos.fetch.request,
});
