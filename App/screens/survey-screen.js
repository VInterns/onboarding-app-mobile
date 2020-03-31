import SurveyComponent from "../component/Survey";
import { connect } from "react-redux";

import { State, addSurvey } from "../state";
import React, { Component } from "react";
// import { Dispatch, bindActionCreators } from "redux";
// import { SurveyModel } from "../proxy";


class SurveyContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }


    static mapStateToProps(state: State) {
        return {
            userId: state.authorization.userId,
            sectionNumber: state.authorization.sectionNumber
        };
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators({ addSurvey }, dispatch);
    }

    props: {
        userId: String,
        addSurvey: (survey: SurveyModel) => void,
    };


    render() {
        console.log("props", this.props.userId);
        return (
            <SurveyComponent
                userId={this.props.userId}
                navigation={this.props.navigation}
                addSurvey={this.props.addSurvey}
                sectionNumber={this.props.sectionNumber}
            />
        );
    }
}

export const Survey = connect(
    SurveyContainer.mapStateToProps,
    SurveyContainer.mapDispatchToProps
)(SurveyContainer);