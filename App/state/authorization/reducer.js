import { AnyAction } from "redux";
import { AuthorizationState, AuthorizationInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_LOGIN_Action
  | actions.LOGIN_SUCCESS_Action
  | actions.LOGIN_FAIL_Action
  | actions.ON_REGISTER_Action
  | actions.REGISTER_SUCCESS_Action
  | actions.REGISTER_FAIL_Action;

export function authorizationReducer(
  state: AuthorizationState = AuthorizationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_LOGIN: {
      return {
        ...state,
        loading: true,
        username: action.payload.username
      };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true
        // username: action.payload.username
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false
      };
    }

    case types.ON_REGISTER: {
      debugger;
      return {
        ...state
      };
    }

    case types.REGISTER_SUCCESS: {
      debugger;
      return {
        ...state,
        isRegistered: true
      };
    }

    case types.REGISTER_FAIL: {
      return {
        ...state,
        isRegistered: false,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
}
