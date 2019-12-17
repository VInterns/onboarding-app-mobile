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

export interface sectionNumberModel {
  sectionNumber: number;
}

export interface SurveyModel {
  id: String,
  useful: Number,
  engaging: Number,
  comment: String
}

export interface UserLastSectionModel {
  id: String,
  lastSection: String
}
