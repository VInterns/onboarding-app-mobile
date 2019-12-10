import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import WalkThrough2 from "../component/walkThrough2";

class Walkthrough2Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStateToProps(state: State) {
    return {
      lastScreen: state.authorization.lastScreen,
      userId: state.authorization.userId,
      sectionNumber: state.authorization.sectionNumber
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryNavigate }, dispatch);
  }

  props: {
    tryNavigate: (nextScreen: string) => void,
    userId: String,
    sectionNumber: Number
  };

  // static getDerivedStateFromProps(props, state) {
  //   // props.navigation.navigate(props.lastScreen);
  //   return state;
  // }

  render() {
    // console.log("props", this.props);
    // this.props.logout()   /// --> TO LOGOUT AND CLEAR PRESIST STATE
    console.log(
      this.props.tryNavigate,
      "This is the tryNavigate in walkthrouh2-screen"
    );
    return (
      <WalkThrough2
        tryNavigate={this.props.tryNavigate}
        navigation={this.props.navigation}
        isLoggedIn={this.props.isLoggedIn}
        userId={this.props.userId}
        sectionNumber={this.props.sectionNumber}
      />
    );
  }
}

export const walkThrough2 = connect(
  Walkthrough2Container.mapStateToProps,
  Walkthrough2Container.mapDispatchToProps
)(Walkthrough2Container);
