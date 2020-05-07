import { combineReducers } from 'redux';
import coinReducer from '../reducers/coinReducer';

export default combineReducers({
  coins: coinReducer,
});
