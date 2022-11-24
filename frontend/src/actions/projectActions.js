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
import { CREATE_PROJECT_ENDPOINT, GET_ALL_PROJECTS_ENDPOINT, GET_SINGLE_PROJECT_ENDPOINT } from '../constants/apiConstants'
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

export const listProjectDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PROJECT_DETAILS_REQUEST})

        const {data} = await axios.get(
            `${GET_SINGLE_PROJECT_ENDPOINT}${id}/`
        )
        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        dispatch({type: PROJECT_CREATE_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            CREATE_PROJECT_ENDPOINT,
            project,
            config
        )

        dispatch({
            type: PROJECT_CREATE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PROJECT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}