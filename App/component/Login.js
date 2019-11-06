import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Text,
  Button,
  KeyboardAvoidingView,
  Linking //for linking a button to a link
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Spinner } from "native-base";

import UserInput from "./UserInput";


//import Spinner from './Spinner';

import backgroundImg from "../assets/background.png";
import logoImg from "../assets/light.png";
import carKey from "../assets/carKeyDev.png";
import user from "../assets/userLogInDev.png";

export class Login extends Component {
  constructor() {
    super();
    //  _onLoginPressed=this._onLoginPressed.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  props: {
    errorMessage: string,
    loading: boolean,
    tryLogin: (user: UserLoginModel) => void,
    isLoggedIn: boolean,
  };

  static navigationOptions = {
    header: null
  };

  handleEmail = text => {
    this.setState({ email: text });
  };
  s
  handlePassword = text => {
    this.setState({ password: text });
  };

  render() {
    const { navigate } = this.props.navigation;
    const loadingSpinner = this.props.loading ? (
      <Spinner color="red" />
    ) : (
        <Text bold red margin20>
          {" "}
          {this.props.errorMessage}
        </Text>
      );
    return (



      <View style={{ flex: 1, }}>
        <ImageBackground source={backgroundImg} style={styles.wallpaper}>
          {/*background*/}

          <Image
            source={logoImg}
            style={styles.Logo}
          />
          {/* top corner logo*/}

          {/*welcome To and Vodabuddy text view*/}
          < KeyboardAwareScrollView style={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} >
            <View style={{ flex: 1 }}>

              <View style={styles.TextContainer}>

                <View style={styles.welcomTextView}>
                  <Text style={styles.WelcomeText}>Welcome to</Text>
                </View>

                <View style={styles.VodaBuddyView}>
                  <Text style={styles.VodaText}>Voda</Text>
                  <Text style={styles.buddyText}>buddy</Text>
                </View>

              </View>

              <View style={styles.userNameTextInputView}>
                <Image source={user} style={styles.userNameIconStyle} />

                <UserInput
                  disabled={this.props.loading}
                  placeholder={"E-mail"}
                  onChangeText={this.handleEmail}
                />
              </View>

              <View style={styles.PasswordTextInputView}>
                <Image source={carKey} style={styles.PasswordIconStyle} />
                <UserInput
                  placeholder={"Password"}
                  onChangeText={this.handlePassword}
                  secureTextEntry={true}
                  disabled={this.props.loading}
                />
              </View>

              <View style={styles.ForgetPasswordContainer}>
                <TouchableOpacity
                // onPress={() => Linking.openURL("http://google.com")}
                >
                  {/*chane the linking url in order to change password*/}
                  <Text style={styles.ForgetPasswordStyle}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>

              {/*  button view */}
              {loadingSpinner}

              <View>
                <TouchableOpacity
                  disabled={this.props.loading}
                  style={styles.button}
                  onPress={() => this.props.tryLogin(this.state)}
                >
                  <Text style={styles.ButtonText}>Login</Text>
                  <Image
                    source={require("../assets/arrow.png")}
                    style={styles.ButtonimageStyle}
                  />
                </TouchableOpacity>
              </View>

            </View>
          </KeyboardAwareScrollView >

          {/*signature bottom text view*/}
          <View style={styles.EndTextView}>
            <Text style={styles.VodafoneGroupText}>
              © 2019 Vodafone Group. Vodafone Group Plc
            </Text>
          </View>

        </ImageBackground>
      </View >

    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wallpaper: {
    //background style
    height: "100%",
    width: "100%",

  },
  Logo: {
    position: "absolute",
    marginLeft: DEVICE_WIDTH * 0.7,
    marginTop: DEVICE_HEIGHT * 0.1
  },
  VodafoneGroupText: {
    color: "white"
  },

  WelcomeText: {
    color: "red",
    fontSize: 16,
  },

  VodaText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 35
  },
  buddyText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 35
  },
  welcomTextView: {
    width: "100%",
  },

  TextContainer: {
    marginLeft: DEVICE_WIDTH * 0.07,
    flexDirection: "column",
    marginTop: DEVICE_HEIGHT * 0.30,
    width: DEVICE_WIDTH * 0.396
  },
  VodaBuddyView: {
    width: "100%",
    flexDirection: "row",
  },
  button: {
    // button design
    // width: DEVICE_WIDTH - 250, 
    width: DEVICE_WIDTH * 0.35,
    height: 40,
    backgroundColor: "#E00000",
    borderColor: "#E00000",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: DEVICE_WIDTH * 0.07,
    marginTop: DEVICE_HEIGHT * 0.02,
    borderStyle: "solid",
    borderWidth: 1
  },
  ButtonimageStyle: {
    height: 16.5,
    width: 16.5,
    resizeMode: "stretch",
    marginLeft: DEVICE_WIDTH * 0.03,
    marginTop: DEVICE_HEIGHT * 0.004
  },

  ButtonText: {
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    marginLeft: DEVICE_WIDTH * 0.07,
  },
  userNameIconStyle: {
    marginLeft: DEVICE_WIDTH * 0.07,
    marginTop: 2,
    height: 14,
    width: 12,
    resizeMode: "stretch",
  },
  userNameTextInputView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 45,
    marginTop: DEVICE_HEIGHT * 0.06
  },
  PasswordTextInputView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 45,
    marginTop: DEVICE_HEIGHT * 0.01
  },
  PasswordIconStyle: {
    marginLeft: DEVICE_WIDTH * 0.07,
    height: 14,
    width: 12,
    resizeMode: "stretch",
  },

  ForgetPasswordContainer: {
    //forget password wrapper
    justifyContent: "flex-start", // center of the flex view
    marginLeft: DEVICE_WIDTH * 0.07,
  },
  ForgetPasswordStyle: {
    height: 18,
    // fontFamily: "VodafoneRg",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#4b464d"
  },
  EndTextView: {
    alignItems: "center",
    justifyContent: "center",
    height: DEVICE_HEIGHT * 0.05,
  }
});
