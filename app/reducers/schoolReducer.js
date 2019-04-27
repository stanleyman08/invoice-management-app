import {
  LOAD_SCHOOLS_SUCCESS,
  LOAD_SCHOOL_SUCCESS
} from '../actions/actionType.js';

const initialState = {
  schools: [],
  currentSchool: [{ name: '', orders: [] }]
};

export function schoolReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCHOOLS_SUCCESS:
      return {
        ...state,
        schools: action.payload
      };
    case LOAD_SCHOOL_SUCCESS:
      return {
        ...state,
        currentSchool: action.payload
      };
    default:
      return state;
  }
}
