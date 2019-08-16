import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/constants'

const initialState = { user: null, loading: 'false', error: '' }
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            return { ...initialState, loading: 'true' }
        case LOGIN_FAILURE:
            return { ...initialState, loading: 'false', error: action.error }
        case LOGIN_SUCCESS:
            return { ...initialState, loading: 'false', user: action.user }

        default:
            return state;
    }

}

