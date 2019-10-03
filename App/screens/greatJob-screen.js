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
            lastScreen: state.authorization.lastScreen
        };
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators({ tryNavigate }, dispatch);
    }

    // static componentDidMountMount() {
    //     // Start counting when the page is loaded
    //     console.log("---------------------------------Did Mount ---------------------------");

    //     // this.timeoutHandle = setTimeout(() => {
    //     //     console.log("SetTimeOut");
    //     //     // Add your logic for the transition
    //     //     // this.tryNavigate
    //     //     this.props.tryNavigate("History4");
    //     //     // this.props.navigation.navigate("History4");
    //     // }, 2000);
    // }

    // static componentWillUnmount() {
    //     clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    // }

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
        console.log(this.props.tryNavigate, "This is the tryNavigate");
        return (
            <GreatJob
                tryNavigate={this.props.tryNavigate}
                navigation={this.props.navigation}
                isLoggedIn={this.props.isLoggedIn}
            />
        );
    }
}

export const greatJob = connect(
    GreatJobContainer.mapStateToProps,
    GreatJobContainer.mapDispatchToProps
)(GreatJobContainer);
