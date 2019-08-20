import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryLogin } from "../state";

import { UserLoginModel } from "../proxy";
import { Login } from "../component/Login";
class LoginContainer extends Component {
  static mapStateToProps(state: State) {
    return {
      isLoggedIn: state.authorization.isLoggedIn,
      errorMessage: state.authorization.errorMessage,
      loading: state.ui.loading
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }

  props: {
    errorMessage: string,
    loading: boolean,
    isLoggedIn: boolean,
    tryLogin: (user: UserLoginModel) => void
  };

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.isLoggedIn) {
      // nextProps.navigation.navigate("AccountSetup");
    }
  }

  render() {
    return (
      <Login
        loading={this.props.loading}
        errorMessage={this.props.errorMessage}
        tryLogin={this.props.tryLogin}
        navigation={this.props.navigation}
      />
    );
  }
}

export const LoginScreen = connect(
  LoginContainer.mapStateToProps,
  LoginContainer.mapDispatchToProps
)(LoginContainer);
