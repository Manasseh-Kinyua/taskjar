import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,

    USER_PROFILE_EDIT_REQUEST,
    USER_PROFILE_EDIT_SUCCESS,
    USER_PROFILE_EDIT_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAIL,
    USER_EDIT_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

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

export const userProfileReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_PROFILE_REQUEST:
            return {
                loading: true
            }

        case USER_PROFILE_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userProfileEditReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_PROFILE_EDIT_REQUEST:
            return {
                loading: true
            }

        case USER_PROFILE_EDIT_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload
            }

        case USER_PROFILE_EDIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

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

export const userDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userEditReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_EDIT_REQUEST:
            return {
                loading: true
            }

        case USER_EDIT_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case USER_EDIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_EDIT_RESET:
            return {}

        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DELETE_REQUEST:
            return {
                loading: true
            }

        case USER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case USER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}