// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { schoolReducer } from './schoolReducer.js';
import { reportReducer } from './reportReducer.js';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    schoolReducer,
    reportReducer
  });
}
