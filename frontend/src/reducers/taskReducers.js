import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    TASK_DETAIL_REQUEST,
    TASK_DETAIL_SUCCESS,
    TASK_DETAIL_FAIL,

    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,
    CREATE_TASK_RESET,

    ASSIGN_TASK_REQUEST,
    ASSIGN_TASK_SUCCESS,
    ASSIGN_TASK_FAIL,

    UPDATE_TASK_TO_IN_PROGRESS_REQUEST,
    UPDATE_TASK_TO_IN_PROGRESS_SUCCESS,
    UPDATE_TASK_TO_IN_PROGRESS_FAIL,

    UPDATE_TASK_TO_DONE_REQUEST,
    UPDATE_TASK_TO_DONE_SUCCESS,
    UPDATE_TASK_TO_DONE_FAIL,

    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAIL,
    EDIT_TASK_RESET,

    CREATE_TASK_MESSAGE_REQUEST,
    CREATE_TASK_MESSAGE_SUCCESS,
    CREATE_TASK_MESSAGE_FAIL,

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

export const taskDetailReducer = (state = {task:{}}, action) => {
    switch(action.type) {
        case TASK_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case TASK_DETAIL_SUCCESS:
            return {
                loading: false,
                task: action.payload
            }

        case TASK_DETAIL_FAIL:
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

        case CREATE_TASK_RESET:
            return {}

        default:
            return state
    }
}

export const taskAssignReducer = (state = {}, action) => {
    switch(action.type) {
        case ASSIGN_TASK_REQUEST:
            return {
                loading: true
            }

        case ASSIGN_TASK_SUCCESS:
            return {
                loading: false,
                success: true,
                task: action.payload
            }

        case ASSIGN_TASK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const taskUpdateToInProgressReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_TASK_TO_IN_PROGRESS_REQUEST:
            return {
                loading: true
            }

        case UPDATE_TASK_TO_IN_PROGRESS_SUCCESS:
            return {
                loading: false,
                success: true,
                task: action.payload
            }

        case UPDATE_TASK_TO_IN_PROGRESS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const taskUpdateToDoneReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_TASK_TO_DONE_REQUEST:
            return {
                loading: true
            }

        case UPDATE_TASK_TO_DONE_SUCCESS:
            return {
                loading: false,
                success: true,
                task: action.payload
            }

        case UPDATE_TASK_TO_DONE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const taskEditReducer = (state = {}, action) => {
    switch(action.type) {
        case EDIT_TASK_REQUEST:
            return {
                loading: true
            }

        case EDIT_TASK_SUCCESS:
            return {
                loading: false,
                success: true,
                task: action.payload
            }

        case EDIT_TASK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case EDIT_TASK_RESET:
            return {}

        default:
            return state
    }
}

export const taskCreateMessageReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_TASK_MESSAGE_REQUEST:
            return {
                loading: true
            }

        case CREATE_TASK_MESSAGE_SUCCESS:
            return {
                loading: false,
                success: true,
                message: action.payload
            }

        case CREATE_TASK_MESSAGE_FAIL:
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