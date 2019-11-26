import { AuthProxyService } from "./auth-proxy.service";
import { SurveyService } from "./survey-service"
const authProxyService = new AuthProxyService();
const surveyService = new SurveyService()
export { authProxyService, surveyService };
