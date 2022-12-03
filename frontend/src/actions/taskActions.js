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

    CREATE_TASK_MESSAGE_REQUEST,
    CREATE_TASK_MESSAGE_SUCCESS,
    CREATE_TASK_MESSAGE_FAIL,

    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAIL,
} from "../constants/taskConstants";
import { ASSIGN_TASK_ENDPOINT, CREATE_TASK_ENDPOINT, CREATE_TASK_MESSAGE_ENDPOINT, DELETE_TASK_ENDPOINT, EDIT_TASK_ENDPOINT, GET_PROJECT_TASKS_ENDPOINT, GET_SINGLE_TASK_ENDPOINT, UPDATE_TASK_TO_DONE_ENDPOINT, UPDATE_TASK_TO_IN_PROGRESS_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const listTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: TASK_LIST_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `${GET_PROJECT_TASKS_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: TASK_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: TASK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listTaskDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: TASK_DETAIL_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `${GET_SINGLE_TASK_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: TASK_DETAIL_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: TASK_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createTask = (task) => async (dispatch, getState) => {
    try {
        dispatch({type: CREATE_TASK_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            CREATE_TASK_ENDPOINT,
            task,
            config
        )

        dispatch({
            type: CREATE_TASK_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: CREATE_TASK_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const assignTask = (taskId, user) => async (dispatch, getState) => {
    try {
        dispatch({type: ASSIGN_TASK_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${ASSIGN_TASK_ENDPOINT}${taskId}/`,
            user,
            config
        )

        dispatch({
            type: ASSIGN_TASK_SUCCESS,
            payload: data
        })

        dispatch({
            type: TASK_DETAIL_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: ASSIGN_TASK_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const markTaskAsInProgress = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: UPDATE_TASK_TO_IN_PROGRESS_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${UPDATE_TASK_TO_IN_PROGRESS_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: UPDATE_TASK_TO_IN_PROGRESS_SUCCESS,
            payload: data
        })

        dispatch({
            type: TASK_DETAIL_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: UPDATE_TASK_TO_IN_PROGRESS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const markTaskAsDone = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: UPDATE_TASK_TO_DONE_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${UPDATE_TASK_TO_DONE_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: UPDATE_TASK_TO_DONE_SUCCESS,
            payload: data
        })

        dispatch({
            type: TASK_DETAIL_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: UPDATE_TASK_TO_DONE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editTask = (task) => async (dispatch, getState) => {
    try {
        dispatch({type: EDIT_TASK_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${EDIT_TASK_ENDPOINT}${task.id}/`,
            task,
            config
        )

        dispatch({
            type: EDIT_TASK_SUCCESS,
            payload: data
        })

        dispatch({
            type: TASK_DETAIL_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: EDIT_TASK_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createTaskMessage = (message) => async (dispatch, getState) => {
    try {
        dispatch({type: CREATE_TASK_MESSAGE_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            CREATE_TASK_MESSAGE_ENDPOINT,
            message,
            config
        )

        dispatch({
            type: CREATE_TASK_MESSAGE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: CREATE_TASK_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: DELETE_TASK_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `${DELETE_TASK_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: DELETE_TASK_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: DELETE_TASK_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}