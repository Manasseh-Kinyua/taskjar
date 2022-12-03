import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectCreateReducer, projectDeleteReducer, projectDetailsReducer, projectEditReducer, projectListReducer } from './reducers/projectReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { taskAssignReducer, taskCreateMessageReducer, taskCreateReducer, taskDeleteReducer, taskDetailReducer, taskEditReducer, taskListReducer, taskUpdateToInProgressReducer } from './reducers/taskReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectCreate: projectCreateReducer,
    projectEdit: projectEditReducer,
    projectDelete: projectDeleteReducer,

    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,

    taskList: taskListReducer,
    taskDetail: taskDetailReducer,
    taskCreate: taskCreateReducer,
    taskAssign: taskAssignReducer,
    taskUpdateToInProgress: taskUpdateToInProgressReducer,
    taskEdit: taskEditReducer,
    taskCreateMessage: taskCreateMessageReducer,
    taskDelete: taskDeleteReducer,
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