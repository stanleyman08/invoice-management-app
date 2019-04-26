// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import counter from './counter';
import { schoolReducer } from './schoolReducer.js';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    schoolReducer
  });
}
