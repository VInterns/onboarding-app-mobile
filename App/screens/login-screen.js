import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryLogin, logout, onNextScreen, resetMsg } from "../state";

import { UserLoginModel } from "../proxy";
import { Login } from "../component/newLogin";
import Constants from 'expo-constants';

class LoginContainer extends Component {
  constructor() {
    super();
    console.log('constants-> ',Constants);
    this.state = {};

  }
  static mapStateToProps(state: State) {
    return {
      isLoggedIn: state.authorization.isLoggedIn,
      errorMessage: state.authorization.errorMessage,
      loading: state.ui.loading,
      lastScreen: state.authorization.lastScreen
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin, logout, onNextScreen, resetMsg }, dispatch);
  }


  props: {
    errorMessage: string,
    loading: boolean,
    isLoggedIn: boolean,
    tryLogin: (user: UserLoginModel) => void,
    logout: () => void,
    lastScreen: string,
    onNextScreen: (lastScreen: NextScreenModel) => void,
    resetMsg: () => void
  };


  static getDerivedStateFromProps(props, state) {

    console.log("Is loggedin " + props.isLoggedIn);
    if (props.isLoggedIn) {

      props.navigation.navigate(props.lastScreen || "walkThrough");
      // props.navigation.navigate("Organisation1");

      return state;
    }
    return state;
  }

  render() {

    //  this.props.logout()
    // this.props.resetMsg()
    /// --> TO LOGOUT AND CLEAR PRESIST STATE
    return (
      <Login
        loading={this.props.loading}
        errorMessage={this.props.errorMessage}
        tryLogin={this.props.tryLogin}
        navigation={this.props.navigation}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

export const LoginScreen = connect(
  LoginContainer.mapStateToProps,
  LoginContainer.mapDispatchToProps
)(LoginContainer);
