import union from 'lodash/union';
import merge from 'lodash/merge';
import { entities } from '../../types';

const initialState = {
  byId: {},
  allIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case entities.todos.addItems:
      return {
        ...state,
        byId: merge({}, state.byId, action.payload.byId),
        allIds: union(state.allIds, action.payload.allIds),
      };
    default:
      return state;
  }
};

export default reducer;
