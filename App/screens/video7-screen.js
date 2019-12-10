import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import Video7 from "../component/Video7";

class Video7Container extends Component {

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


    render() {
        console.log("Here in video7 screen render");
        return (
            <Video7
                tryNavigate={this.props.tryNavigate}
                navigation={this.props.navigation}
                isLoggedIn={this.props.isLoggedIn}
                userId={this.props.userId}
                sectionNumber={this.props.sectionNumber}
            />
        );
    }
}

export const video7 = connect(
    Video7Container.mapStateToProps,
    Video7Container.mapDispatchToProps
)(Video7Container);