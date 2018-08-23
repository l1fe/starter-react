import { api } from '../../../types';
import { todos } from '../../api';

describe('API Todos actions', () => {
  it('should create an action to fetch todos', () => {
    const expectedAction = {
      type: api.todos.fetch.request,
    };
    expect(todos.fetch()).toEqual(expectedAction)
  });
});
