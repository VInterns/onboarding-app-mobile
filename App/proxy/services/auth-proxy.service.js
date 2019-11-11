import { BASE_URL } from "../../services/http-client/constants";
import {
  UserRegisterModel,
  UserLoginModel,
  UserConfirmModel
} from "../models/index";

export class AuthProxyService {
  async login(user: UserLoginModel) {
    debugger;
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;

    return await fetch(`${BASE_URL}api/account/login`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then((response) => {
      // console.log('response inside fetch.then',response.json());
      return response.json();
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
}
