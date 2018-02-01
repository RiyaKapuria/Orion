import ApiCall from '../ApiCall';

//Sign In User
export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function loginDetails(input) {
  let url = "admins/api_login";
  return (dispatch) => {
   dispatch({
     type: LOGIN_FETCH,
     payload: input
   });
   ApiCall.postApiCall(url, input)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error
      });
    })
  }
}




 // export function loginDetails(input) {
 //   let url = "admins/api_login";
 //   let result = ApiCall.postApiCall(url, input)
 //   .then(function (response) {
 //      console.log(response);
 //    })
 //    .catch(function (error) {
 //      console.log(error);
 //    });
 //    console.log(result);
 //   return {
 //     type: "LOGIN_SUCCESS",
 //     payload: result
 //   };
 // }
