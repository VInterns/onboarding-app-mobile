import { BASE_URL } from "../../services/http-client/constants";
import {
    SurveyModel
} from "../models/index";

export class SurveyService {
    async addSurvey(survey: SurveyModel) {
        const data = {};
        data["id"] = survey.userId;
        data["useful"] = survey.useful;
        data["enggaging"] = survey.engaging;
        data["comment"] = survey.comment;

        return await fetch(`${BASE_URL}api/survey/addSurvey`, {
            method: "post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data)
        });

    }
}