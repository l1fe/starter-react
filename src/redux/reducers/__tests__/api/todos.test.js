import todosReducer from '../../api/todos';

describe('API Todos reducer test', () => {
  it('should handle the empty state', () => {
    expect(todosReducer(undefined, { })).toEqual({
      loading: false,
    });
  });
});
