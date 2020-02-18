import * as types from "./actions";
import { HttpClient } from "../../services/http-client/http-client-service";
import {
  authProxyService,
  TokenDto,
  UserLoginModel,
  UserRegisterModel,
  SurveyModel,
  surveyService
} from "../../proxy";
import * as UiTypes from "../ui/actions";
import LearningAtVodafone from "../../component/LearningAtVodafone";

var jwtDecode = require("jwt-decode");


/*************** */
export type ON_LOGIN_Action = { type: string, payload: any };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };
export type LOGOUT = { type: String, payload: string };

/*************** */

/************************* */
export type ON_REGISTER_Action = { type: string, payload: any };

export type REGISTER_SUCCESS_Action = { type: string, payload: any };

export type REGISTER_FAIL_Action = { type: string, payload: string };

/*************************** */
// export async function addSurvey(survey: SurveyModel) {
//   debugger;
//   return async dispatch => {
//     let response = await surveyService.addSurvey(survey);
//     if (response.status === 200) {
//       console.log("1 Survey added successfully");
//     }
//     else {
//       console.log("an error occured while adding the survey");
//     }
//   };
// }


export async function tryLogin(user: UserLoginModel) {
  let result = null;
  return async dispatch => {
    dispatch(onLogin(user));
    dispatch({ type: UiTypes.UI_START_LOADING });
    try {
      let response = await authProxyService.login(user);
      result = await response.json();
      let tokenPayload = result["token"];
      let decoded = jwtDecode(tokenPayload);
      let token = {};

      token["email"] = decoded["email"];
      token["id"] = decoded["_id"];
      token["payload"] = tokenPayload;
      if (response.status === 200) {
        dispatch(success(token));
        dispatch({ type: UiTypes.UI_STOP_LOADING });
      } else {
        dispatch(fail("Invalid credentials"));
        dispatch({ type: UiTypes.UI_STOP_LOADING });
      }
      dispatch({ type: UiTypes.UI_STOP_LOADING });
    } catch (error) {
      dispatch(fail("Invalid credentials"));
      dispatch({ type: UiTypes.UI_STOP_LOADING });

    }
  };
}

export async function tryNavigate(nextScreen: string, userId: String) {
  return async dispatch => {
    let user =
    {
      id: userId,
      lastSection: nextScreen
    };
    try {

      let response = await authProxyService.updateLastSection(user);
      if (response.status === 200) {
        console.log("last section added successfully");
      }
      else {
        console.log("an error occured while adding the last section");
      }
      dispatch(onNextScreen(nextScreen));
    } catch (error) {
      console.log("an error occured while adding the last section");
      dispatch(onNextScreen(nextScreen));
    }
  };
}

export async function tryRegister(user: UserRegisterModel) {
  return async dispatch => {
    dispatch({ type: UiTypes.UI_START_LOADING });
    dispatch(onRegister());
    try {

      let response = await authProxyService.register(user);
      if (response.status === 200) {
        dispatch(registerSuccess());
        dispatch({ type: UiTypes.UI_STOP_LOADING });
      } else {
        dispatch({ type: UiTypes.UI_STOP_LOADING });
        dispatch(registerFail());
      }
    } catch (error) {
      dispatch({ type: UiTypes.UI_STOP_LOADING });
      dispatch(registerFail());
    }
  };
}

export function onLogin(user): ON_LOGIN_Action {
  return { type: types.ON_LOGIN, payload: user };
}

export function success(userId): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS, payload: userId };
}

export async function fail(errorMsg): LOGIN_FAIL_Action {
  return async dispatch => {
    dispatch({ type: UiTypes.UI_STOP_LOADING, payload: errorMsg });
    dispatch({ type: types.LOGIN_FAIL, payload: errorMsg })
  };
}

export function onRegister(): ON_REGISTER_Action {
  return { type: types.ON_REGISTER };
}

export function registerSuccess(): REGISTER_SUCCESS_Action {
  return { type: types.REGISTER_SUCCESS };
}

export function registerFail(errorMsg): REGISTER_FAIL_Action {
  return { type: types.REGISTER_FAIL, payload: errorMsg };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: types.LOGOUT });
    dispatch({ type: UiTypes.UI_STOP_LOADING });
  }
}

export function onNextScreen(nextScreen): NextScreenModel {
  debugger;
  return {
    type: types.ON_NEXT_SCREEN,
    payload: nextScreen
  };
}

export function resetMsg(): RESET_VALIDATION_MSG_Action {
  return { type: types.RESET_VALIDATION_MSG };
}
