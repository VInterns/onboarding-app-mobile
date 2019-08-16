import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants'

import axios from 'axios';

export const loginUser = ({ username, password }) => {


    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMPT })
        //call the backend
        axios.post('https://mean-app-tutorial.herokuapp.com/users/auth',{username:username,password})
        .then(resp=>handleResponse(resp.data))
        .catch(error => console.log(error)) 
    };


}

const handleResponse = (dispatch, data) => {
    if (!data.success) {
        onLoginFailure(dispatch, data.message);
    }
    else {

        onLoginSuccess(dispatch, data.user, data.token);
    }
};

const onLoginSuccess = (dispatch, user, token) => {
    dispatch({ type: LOGIN_SUCCESS, user });

};
const onLoginFailure = (dispatch, errorMessage) => {

    dispatch({ type: LOGIN_FAILURE, error: errorMessage });
};