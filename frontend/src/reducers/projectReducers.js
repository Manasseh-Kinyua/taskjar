import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    ADD_CONTRIBUTOR_REQUEST,
    ADD_CONTRIBUTOR_SUCCESS,
    ADD_CONTRIBUTOR_FAIL,
    ADD_CONTRIBUTOR_RESET,

    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_RESET,

    PROJECT_EDIT_REQUEST,
    PROJECT_EDIT_SUCCESS,
    PROJECT_EDIT_FAIL,
    PROJECT_EDIT_RESET,

    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,
    PROJECT_DELETE_RESET,
} from '../constants/projectConstants'

export const projectListReducer = (state = {projects:[]}, action) => {
    switch(action.type) {
        case PROJECT_LIST_REQUEST:
            return {
                loading: true,
                projects: []
            }

        case PROJECT_LIST_SUCCESS:
            return {
                loading: false,
                projects: action.payload
            }

        case PROJECT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const projectDetailsReducer = (state = {project:{}}, action) => {
    switch(action.type) {
        case PROJECT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case PROJECT_DETAILS_SUCCESS:
            return {
                loading: false,
                project: action.payload
            }

        case PROJECT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const projectCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case PROJECT_CREATE_REQUEST:
            return {
                loading: true,
            }

        case PROJECT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload
            }

        case PROJECT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case PROJECT_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const projectAddContributorReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_CONTRIBUTOR_REQUEST:
            return {
                loading: true,
            }

        case ADD_CONTRIBUTOR_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload
            }

        case ADD_CONTRIBUTOR_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ADD_CONTRIBUTOR_RESET:
            return {}

        default:
            return state
    }
}

export const projectEditReducer = (state = {}, action) => {
    switch(action.type) {
        case PROJECT_EDIT_REQUEST:
            return {
                loading: true,
            }

        case PROJECT_EDIT_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload
            }

        case PROJECT_EDIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case PROJECT_EDIT_RESET:
            return {}

        default:
            return state
    }
}

export const projectDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case PROJECT_DELETE_REQUEST:
            return {
                loading: true,
            }

        case PROJECT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case PROJECT_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case PROJECT_DELETE_RESET:
            return {}

        default:
            return state
    }
}