import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,
} from "../constants/taskConstants";
import { CREATE_TASK_ENDPOINT, GET_PROJECT_TASKS_ENDPOINT } from "../constants/apiConstants";
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