import { BASE_URL } from "../../services/http-client/constants";
import {
  UserRegisterModel,
  UserLoginModel,
  UserConfirmModel
} from "../models/index";
var userIdVar = ""

export class AuthProxyService {

  constructor() {
    this.state = {
      userId: ""
    };
  }
  async login(user: UserLoginModel) {
    debugger;
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;

    // var res = await fetch(`${BASE_URL}api/account/login`, {
    //   method: "post",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // }).then(response => response.json()).then(responseJson => {
    //   // this.setState({
    //   //   userId: responseJson.userId
    //   // }, function () {
    //   //   console.log("inside the function : ", this.state.userId);

    //   // });
    //   userIdVar = responseJson;
    //   console.log("var : ", userIdVar);
    // }
    // );
    // debugger;
    // // let response = {};
    // // response["status"] = res.status;
    // // response["userId"] = userIdVar;
    // return userIdVar;



    return await fetch(`${BASE_URL}api/account/login`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => { return response.json() });
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
