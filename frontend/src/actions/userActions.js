import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    GET_CONTRIBUTORS_REQUEST,
    GET_CONTRIBUTORS_SUCCESS,
    GET_CONTRIBUTORS_FAIL,
} from "../constants/userConstants";
import { GET_ALL_USERS_ENDPOINT, GET_CONTRIBUTORS_ENDPOINT, USER_LOGIN_ENDPOINT, USER_REGISTER_ENDPOINT } from "../constants/apiConstants";
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

export const getAllUsers = () => async (dispatch) => {
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

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')

    dispatch({type: USER_LOGOUT})
}