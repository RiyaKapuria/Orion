import ApiCall from '../ApiCall';
import Cookies from 'js-cookie';

let id = Cookies.get('ID');

export function projectDetails(input) {
  console.log("input",input);
  let filter_url = "projects?page="+input.page+"&filter="+input.filter+"&access_token=";
  let search_url = "projects?page="+input.page+"&query="+input.search+"&access_token=";
  let url = null;
  { input.search === null ? url = filter_url : url = search_url }
  return (dispatch) => {
   dispatch({type: "PROJECT_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "PROJECT_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "PROJECT_DETAILS", payload: error});
    })
  }
}

export function projectAssign(input) {
  console.log("input",input);
  let search_url = "projects?page="+input.page+"&query="+input.search+"&access_token=";
  let url = null;
  { input.search === null ? url = null : url = search_url }
  return (dispatch) => {
   dispatch({type: "PROJECT_ASSIGN"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "PROJECT_ASSIGN", payload: response});
    })
    .catch((error) => {
      dispatch({type: "PROJECT_ASSIGN", payload: error});
    })
  }
}
