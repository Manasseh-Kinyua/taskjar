import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectCreateReducer, projectDetailsReducer, projectEditReducer, projectListReducer } from './reducers/projectReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectCreate: projectCreateReducer,
    projectEdit: projectEditReducer,

    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store