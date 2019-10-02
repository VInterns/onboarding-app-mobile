import { AnyAction } from "redux";
import { UiState, UiInitialState } from "./state";
// import * as actions from "./action-creator";
import * as types from "./actions";
import * as authTypes from '../authorization/actions';
// type Action = actions.L;

export function uiReducer(
  state: UiState = UiInitialState,
  action: any
): UiState {
  switch (action.type) {
    case types.UI_START_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case types.UI_STOP_LOADING:{
      return{
        ...state,
        loading:false
      }
    }

    default:
      return state;
  }
}
