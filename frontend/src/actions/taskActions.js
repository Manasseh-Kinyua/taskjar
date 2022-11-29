import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,
} from "../constants/taskConstants";
import { GET_PROJECT_TASKS_ENDPOINT } from "../constants/apiConstants";
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