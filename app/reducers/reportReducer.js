import { LOAD_REPORTS_SUCCESS } from '../actions/actionType.js';

const initialState = {
  reports: {
    a: 0,
    b: 0,
    ma: 0,
    mb: 0,
    la: 0,
    lb: 0
  }
};

export function reportReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPORTS_SUCCESS:
      return {
        ...state,
        reports: action.payload
      };
    default:
      return state;
  }
}
