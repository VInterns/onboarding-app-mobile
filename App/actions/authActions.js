import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants'

import axios from 'axios';
//import environment from '../environment';
import { BASE_URL } from "../environment";

export class AuthProxyService {
    async login(user: any) {
        debugger;
      const data = {};
      data["userName"] = user.userName;
      data["password"] = user.password;
  
      return await fetch(`${BASE_URL}api/account/login`, {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    }
}
const authProxyService = new AuthProxyService();


// export const loginUser = ({ username, password }) => {

//     debugger;
//     return (dispatch) => {
//         debugger;
//         dispatch({ type: LOGIN_ATTEMPT })
//         //call the backend
//         axios.post(`${BASE_URL}api/account/login`,{username:username,password})
//         .then(resp=>{
//             debugger;
//             handleResponse(resp.data)
//         })         
//         .catch(error => {
//             debugger;
//             console.log(error)
//         }) 
//     };

// debugger;
// }

export async function tryLogin(user: any) {
    debugger;
    let token = null;
    return async dispatch => {
    //   dispatch(onLogin(user));
    //   dispatch({ type: UiTypes.UI_LOADING });
      dispatch({ type: LOGIN_ATTEMPT })
      let response = await authProxyService.login(user);
      debugger;
      // token = await response.json();
      if (response.status === 200) {
        debugger;
        dispatch(success(token));
        //dispatch({ type: UiTypes.UI_LOADING });
      } else {
        dispatch(fail());
        //dispatch({ type: UiTypes.UI_LOADING });
      }
    };
  }
  

const handleResponse = (dispatch, data) => {
    debugger;
    if (!data.success) {
        onLoginFailure(dispatch, data.message);
    }
    else {

        onLoginSuccess(dispatch, data.user, data.token);
    }
};

const onLoginSuccess = (dispatch, user, token) => {
    dispatch({ type: LOGIN_SUCCESS, user });

};
const onLoginFailure = (dispatch, errorMessage) => {

    dispatch({ type: LOGIN_FAILURE, error: errorMessage });
};