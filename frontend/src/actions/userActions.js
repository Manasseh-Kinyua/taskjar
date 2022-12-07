import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,

    USER_PROFILE_EDIT_REQUEST,
    USER_PROFILE_EDIT_SUCCESS,
    USER_PROFILE_EDIT_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAIL,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    GET_CONTRIBUTORS_REQUEST,
    GET_CONTRIBUTORS_SUCCESS,
    GET_CONTRIBUTORS_FAIL,
} from "../constants/userConstants";
import { DELETE_USER_ENDPOINT, EDIT_USER_ENDPOINT, EDIT_USER_PROFILE_ENDPOINT, GET_ALL_USERS_ENDPOINT, GET_CONTRIBUTORS_ENDPOINT, GET_USER_DETAILS_ENDPOINT, GET_USER_PROFILE_ENDPOINT, USER_LOGIN_ENDPOINT, USER_REGISTER_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            USER_REGISTER_ENDPOINT,
            {'name': name, 'email': email, 'password': password},
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            USER_LOGIN_ENDPOINT,
            {'username': email, 'password': password},
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getContributors = () => async (dispatch) => {
    try {
        dispatch({type: GET_CONTRIBUTORS_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.get(
            GET_CONTRIBUTORS_ENDPOINT,
            config
        )

        dispatch({
            type: GET_CONTRIBUTORS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: GET_CONTRIBUTORS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_PROFILE_REQUEST})

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
            GET_USER_PROFILE_ENDPOINT,
            config
        )

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_PROFILE_EDIT_REQUEST})

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
            EDIT_USER_PROFILE_ENDPOINT,
            user,
            config
        )

        dispatch({
            type: USER_PROFILE_EDIT_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_PROFILE_EDIT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getAllUsers = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_LIST_REQUEST})

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
            GET_ALL_USERS_ENDPOINT,
            config
        )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST})

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
            `${GET_USER_DETAILS_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editUser = (id, user) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_EDIT_REQUEST})

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
            `${EDIT_USER_ENDPOINT}${id}/`,
            user,
            config
        )

        dispatch({
            type: USER_EDIT_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_EDIT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_DELETE_REQUEST})

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
            `${DELETE_USER_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')

    dispatch({type: USER_LOGOUT})
}