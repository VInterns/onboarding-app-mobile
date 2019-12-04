import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import Video4 from "../component/Video4";

class Video4Container extends Component {

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
        tryNavigate: (nextScreen: string) => void,
        userId: String,
    };


    render() {
        console.log("Here in video4 screen render");
        return (
            <Video4
                tryNavigate={this.props.tryNavigate}
                navigation={this.props.navigation}
                isLoggedIn={this.props.isLoggedIn}
                userId={this.props.userId}

            />
        );
    }
}

export const video4 = connect(
    Video4Container.mapStateToProps,
    Video4Container.mapDispatchToProps
)(Video4Container);