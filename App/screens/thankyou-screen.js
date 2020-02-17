import ThankYouComponent from "../component/ThankYou";
import { connect } from "react-redux";
import React, { Component } from "react";

import { State } from "../state";

class ThankYouContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }


    static mapStateToProps(state: State) {
        return {};
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators({}, dispatch);
    }



    render() {
        console.log("props", this.props.userId);
        return (
            <ThankYouComponent
                navigation={this.props.navigation}
            />
        );
    }
}

export const ThankYou = connect(
    ThankYouContainer.mapStateToProps,
    ThankYouContainer.mapDispatchToProps
)(ThankYouContainer);