import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import Video1 from "../component/Video1";

class Video1Container extends Component {
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


    render() {
        console.log("Here in video1 screen render");
        console.log('This is the props of Video1 --->',this.props)
        return (
            <Video1
                tryNavigate={this.props.tryNavigate}
                navigation={this.props.navigation}
                isLoggedIn={this.props.isLoggedIn}
            />
        );
    }
}

export const video1 = connect(
    Video1Container.mapStateToProps,
    Video1Container.mapDispatchToProps
)(Video1Container);
