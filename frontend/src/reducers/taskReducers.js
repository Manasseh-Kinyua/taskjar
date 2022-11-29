import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,
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