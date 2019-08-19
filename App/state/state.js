import { UiInitialState } from "./ui/state";
import { AuthorizationState } from "./authorization/state";

export type State = {
  authorization: AuthorizationState,
  ui: UiInitialState
};
