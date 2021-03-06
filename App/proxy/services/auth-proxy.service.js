import { BASE_URL } from "../../services/http-client/constants";
import {
  UserRegisterModel,
  UserLoginModel,
  UserConfirmModel
} from "../models/index";

export class AuthProxyService {

  constructor() {
    this.state = {
      userId: ""
    };
  }
  async login(user: UserLoginModel) {
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;

    return await fetch(`${BASE_URL}api/account/login`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    });

  }

  async register(user: UserRegisterModel) {
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;
    data["mobileNumber"] = user.mobileNumber;
    data["userName"] = user.userName;

    return await fetch(`${BASE_URL}api/account/register`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }


  async updateLastSection(user: UserLastSectionModel) {
    const data = {};
    data["_id"] = user.id;
    data["lastSection"] = user.lastSection;

    return await fetch(`${BASE_URL}api/account/sectionupdate`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }
}
