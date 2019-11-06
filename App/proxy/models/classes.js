export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserRegisterModel {
  userName: string;
  password: string;
  email: string;
  mobileNumber: number;
}

export interface NextScreenModel {
  nextScreen: String;
}

export interface SurveyModel {

  userId: String,
  useful: Number,
  engaging: Number,
  comment: String
}
