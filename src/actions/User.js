import ApiCall from '../ApiCall';
import Cookies from 'js-cookie';

let id = Cookies.get('ID');

export function personalDetails() {
  let url = "employees/"+id+"?access_token=";
  return (dispatch) => {
   dispatch({type: "PERSONAL_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "PERSONAL_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "PERSONAL_DETAILS", payload: error});
    })
  }
}

export function professionalDetails() {
  let url = "employees/"+id+"/professional?access_token=";
  return (dispatch) => {
   dispatch({type: "PROFESSIONAL_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "PROFESSIONAL_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "PROFESSIONAL_DETAILS", payload: error});
    })
  }
}

export function otherDetails() {
  let url = "employees/"+id+"/skills?access_token=";
  return (dispatch) => {
   dispatch({type: "OTHER_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "OTHER_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "OTHER_DETAILS", payload: error});
    })
  }
}

export function allEmp() {
  let finalurl = "&access_token=";
  let pageurl = "employees?page=1?per_page=10";
  let url = pageurl + finalurl;
  return (dispatch) => {
   dispatch({type: "ALL_EMP"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "ALL_EMP", payload: response});
    })
    .catch((error) => {
      dispatch({type: "ALL_EMP", payload: error});
    })
  }
}

export function singleEmpDetails(ID) {
  let url = "employees/"+ID+"?access_token=";
  return (dispatch) => {
   dispatch({type: "SINGLE_EMP_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "SINGLE_EMP_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "SINGLE_EMP_DETAILS", payload: error});
    })
  }
}
