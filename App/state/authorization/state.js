export interface AuthorizationState {
  username: string;
  token: any;
  isLoggedIn: boolean;
  isRegistered: boolean;
  errorMessage: string;
  lastScreen: string;
  userId: String;
  sectionNumber: number;
}

export const AuthorizationInitialState: AuthorizationState = {
  username: "",
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  errorMessage: "",
  lastScreen: "walkThrough",
  userId: "",
  sectionNumber: 0
};