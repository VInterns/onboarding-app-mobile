import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import WalkThrough1 from "../component/walkThrough1";

class Walkthrough1Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStateToProps(state: State) {
    return {
      lastScreen: state.authorization.lastScreen
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryNavigate }, dispatch);
  }

  props: {
    tryNavigate: (nextScreen: string) => void
  };

  static getDerivedStateFromProps(props, state) {
    // props.navigation.navigate(props.lastScreen);

    return state;
  }
  render() {
    console.log("props", this.props);
    // this.props.logout()   /// --> TO LOGOUT AND CLEAR PRESIST STATE
    console.log(this.props.tryNavigate, "This is the tryNavigate in walkthrouh-screen");
    return (
      <WalkThrough1
        tryNavigate={this.props.tryNavigate}
        navigation={this.props.navigation}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

export const walkThrough1Screen = connect(
  Walkthrough1Container.mapStateToProps,
  Walkthrough1Container.mapDispatchToProps
)(Walkthrough1Container);
