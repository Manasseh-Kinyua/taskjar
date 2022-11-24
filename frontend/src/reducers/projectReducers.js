import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
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
                project: action.payload
            }

        case PROJECT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}