import todosReducer from '../../entities/todos';

describe('Entities Todos reducer test', () => {
  it('should handle the empty state', () => {
    expect(todosReducer(undefined, { })).toEqual({
      byId: {},
      allIds: [],
    });
  });
});
