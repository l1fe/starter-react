import { combineReducers } from 'redux';

import api from './api';
import entities from './entities';

export default combineReducers({
  api,
  entities,
});
