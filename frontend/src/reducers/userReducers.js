import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    GET_CONTRIBUTORS_REQUEST,
    GET_CONTRIBUTORS_SUCCESS,
    GET_CONTRIBUTORS_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const contributorsReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_CONTRIBUTORS_REQUEST:
            return {
                loading: true
            }

        case GET_CONTRIBUTORS_SUCCESS:
            return {
                loading: false,
                selectUsers: action.payload
            }

        case GET_CONTRIBUTORS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const allUsersReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LIST_REQUEST:
            return {
                loading: true
            }

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}