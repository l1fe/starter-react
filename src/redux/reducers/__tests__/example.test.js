import exampleReducer from '../example';

describe('Example reducer test', () => {
  it('should return the initial state', () => {
    const initialState = { };
    expect(exampleReducer(initialState, { })).toEqual(initialState);
  });
});
