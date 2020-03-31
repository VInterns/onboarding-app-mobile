import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State, tryNavigate } from "../state";
import GreatJob from "../component/GreatJob";

class GreatJobContainer extends Component {
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
        sectionNumber: number
    };

    render() {
        return (
            <GreatJob
                tryNavigate={this.props.tryNavigate}
                navigation={this.props.navigation}
                isLoggedIn={this.props.isLoggedIn}
                userId={this.props.userId}
                sectionNumber={this.props.sectionNumber}
            />
        );
    }
}

export const greatJob = connect(
    GreatJobContainer.mapStateToProps,
    GreatJobContainer.mapDispatchToProps
)(GreatJobContainer);
