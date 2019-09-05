import * as types from "./actions";
import { HttpClient } from "../../services/http-client/http-client-service";
import {
  authProxyService,
  TokenDto,
  UserLoginModel,
  UserRegisterModel
} from "../../proxy";
import * as UiTypes from "../ui/actions";

import { NavigationActions } from "react-navigation";
// import NavigatorService from "../../services/navigator";

/*************** */
export type ON_LOGIN_Action = { type: string, payload: any };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };

/*************** */

/************************* */
export type ON_REGISTER_Action = { type: string, payload: any };

export type REGISTER_SUCCESS_Action = { type: string, payload: any };

export type REGISTER_FAIL_Action = { type: string, payload: string };

/*************************** */

export async function tryLogin(user: UserLoginModel) {
  debugger;
  let token = null;
  return async dispatch => {
    dispatch(onLogin(user));
    dispatch({ type: UiTypes.UI_LOADING });
    let response = await authProxyService.login(user);
    debugger;
    // token = await response.json();
    if (response.status === 200) {
      debugger;
      dispatch(success());
      dispatch({ type: UiTypes.UI_LOADING });
    } else {
      dispatch({ type: UiTypes.UI_LOADING });
      dispatch(fail());
    }
  };
}

export async function tryRegister(user: UserRegisterModel) {
  debugger;
  let token = null;
  return async dispatch => {
    dispatch({ type: UiTypes.UI_LOADING });
    dispatch(onRegister());
    let response = await authProxyService.register(user);
    debugger;
    // token = await response.json();
    if (response.status === 200) {
      // HttpClient.requestInterceptor.push(request => {
      //   let _token: TokenDto;
      //   if (token) _token = token;
      //   request.headers = Object.assign({}, request.headers, {
      //     Authorization: `bearer ${_token.access_token}`
      //   });
      //   return request;
      // });
      dispatch(registerSuccess());
      dispatch({ type: UiTypes.UI_LOADING });
      // dispatch(NavigationActions.navigate({ routeName: "Login" }));
    } else {
      debugger;
      dispatch(registerFail());
      dispatch({ type: UiTypes.UI_LOADING });
    }
  };
}

export function onLogin(user): ON_LOGIN_Action {
  return { type: types.ON_LOGIN, payload: user };
}

export function success(): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS };
}

export function fail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.LOGIN_FAIL, payload: errorMsg };
}

export function onRegister(): ON_REGISTER_Action {
  return { type: types.ON_REGISTER };
}

export function registerSuccess(): REGISTER_SUCCESS_Action {
  return { type: types.REGISTER_SUCCESS };
}

export function registerFail(): REGISTER_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.REGISTER_FAIL, payload: errorMsg };
}
