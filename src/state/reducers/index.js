import {combineReducers} from 'redux';
import amtReducer from './amtReducer';

const Reducers= combineReducers({
  amount: amtReducer
});
export default Reducers;