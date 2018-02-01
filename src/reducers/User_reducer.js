import { PERSONAL_DETAILS, OTHER_DETAILS, PROFESSIONAL_DETAILS, ALL_EMP } from '../actions/User';

const INITIAL_STATE = { personal_details: null, other_details: null, all_emp: null, professional_details: null };

const userDetailsReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "PERSONAL_DETAILS":
      return {
        ...state,
        personal_details: action.payload
      };
    case "OTHER_DETAILS":
      return {
        ...state,
        other_details: action.payload
      };
    case "PROFESSIONAL_DETAILS":
      return {
        ...state,
        professional_details: action.payload
      };
    case "ALL_EMP":
      return {
        ...state,
        all_emp: action.payload
      };
    case "SINGLE_EMP_DETAILS":
      return {
        ...state,
        signle_emp_details: action.payload
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
