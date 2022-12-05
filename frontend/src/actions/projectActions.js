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

    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,

    PROJECT_EDIT_REQUEST,
    PROJECT_EDIT_SUCCESS,
    PROJECT_EDIT_FAIL,

    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,
} from '../constants/projectConstants'
import { ADD_PROJECT_CONTRIBUTORS_ENDPOINT, CREATE_PROJECT_ENDPOINT, DELETE_PROJECT_ENDPOINT, EDIT_PROJECT_ENDPOINT, GET_ALL_PROJECTS_ENDPOINT, GET_SINGLE_PROJECT_ENDPOINT } from '../constants/apiConstants'
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

export const createProject = () => async (dispatch, getState) => {
    try {
        dispatch({type: PROJECT_CREATE_REQUEST})

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
            CREATE_PROJECT_ENDPOINT,
            {},
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

export const addContributor = (id, user) => async (dispatch, getState) => {
    try {
        dispatch({type: ADD_CONTRIBUTOR_REQUEST})

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
            `${ADD_PROJECT_CONTRIBUTORS_ENDPOINT}${id}/`,
            {user},
            config
        )

        dispatch({
            type: ADD_CONTRIBUTOR_SUCCESS,
            payload: data
        })

        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: ADD_CONTRIBUTOR_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editProject = (project) => async (dispatch, getState) => {
    try {
        dispatch({type: PROJECT_EDIT_REQUEST})

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
            `${EDIT_PROJECT_ENDPOINT}${project.id}/`,
            project,
            config
        )

        dispatch({
            type: PROJECT_EDIT_SUCCESS,
            payload: data
        })

        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PROJECT_EDIT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteProject = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: PROJECT_DELETE_REQUEST})

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
            `${DELETE_PROJECT_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: PROJECT_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PROJECT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}