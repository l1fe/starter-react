import { api } from '../../types';

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case api.todos.fetch.request:
      return {
        ...state,
        loading: true,
      };
    case api.todos.fetch.success:
    case api.todos.fetch.failure:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
