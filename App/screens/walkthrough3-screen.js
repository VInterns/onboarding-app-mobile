import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import WalkThrough3 from "../component/walkThrough3";

class Walkthrough3Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStateToProps(state: State) {
    return {
      lastScreen: state.authorization.lastScreen,
      userId: state.authorization.userId

    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryNavigate }, dispatch);
  }

  props: {
    lastScreen: string,
    tryNavigate: (nextScreen: string) => void,
    userId: String,
  };

  render() {
    console.log(this.props.tryNavigate, "This is the render in walkThrough 3");
    return (
      <WalkThrough3
        tryNavigate={this.props.tryNavigate}
        navigation={this.props.navigation}
        isLoggedIn={this.props.isLoggedIn}
        userId={this.props.userId}
      />
    );
  }
}

export const walkThrough3 = connect(
  Walkthrough3Container.mapStateToProps,
  Walkthrough3Container.mapDispatchToProps
)(Walkthrough3Container);
