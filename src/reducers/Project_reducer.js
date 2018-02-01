import { PROJECT_DETAILS } from '../actions/Project';

const INITIAL_STATE = { project_details: null , project_assign: null};

const projectDetailsReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "PROJECT_DETAILS":
      return {
        ...state,
        project_details: action.payload
      };
    case "PROJECT_ASSIGN":
      return {
        ...state,
        project_assign: action.payload
      };
    default:
      return state;
  }
};

export default projectDetailsReducer;
