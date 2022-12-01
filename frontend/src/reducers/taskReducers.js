import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,

    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAIL,
} from "../constants/taskConstants";

export const taskListReducer = (state = {tasks:[]}, action) => {
    switch(action.type) {
        case TASK_LIST_REQUEST:
            return {
                tasks: [],
                loading: true
            }

        case TASK_LIST_SUCCESS:
            return {
                loading: false,
                tasks: action.payload
            }

        case TASK_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const taskCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_TASK_REQUEST:
            return {
                loading: true
            }

        case CREATE_TASK_SUCCESS:
            return {
                loading: false,
                success: true,
                task: action.payload
            }

        case CREATE_TASK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const taskDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_TASK_REQUEST:
            return {
                loading: true
            }

        case DELETE_TASK_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case DELETE_TASK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}