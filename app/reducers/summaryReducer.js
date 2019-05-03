import { LOAD_SUMMARY_SUCCESS } from '../actions/actionType.js';

const initialState = {
  summary: [
    { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0, juice: 0, fruits: 0 },
    { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0, juice: 0, fruits: 0 },
    { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0, juice: 0, fruits: 0 },
    { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0, juice: 0, fruits: 0 },
    { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0, juice: 0, fruits: 0 }
  ]
};

export function summaryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUMMARY_SUCCESS:
      return {
        ...state,
        summary: action.payload
      };
    default:
      return state;
  }
}
