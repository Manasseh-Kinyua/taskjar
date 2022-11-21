import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,
} from '../constants/projectConstants'
import { GET_ALL_PROJECTS_ENDPOINT } from '../constants/apiConstants'
import axios from 'axios'

export const listProjects = () => async (dispatch) => {
    try {
        dispatch({type: PROJECT_LIST_REQUEST})

        const {data} = await axios.get(GET_ALL_PROJECTS_ENDPOINT)
        dispatch({
            type: PROJECT_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}