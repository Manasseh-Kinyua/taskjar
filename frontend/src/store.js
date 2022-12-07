import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectAddContributorReducer, projectCreateReducer, projectDeleteReducer, projectDetailsReducer, projectEditReducer, projectListReducer } from './reducers/projectReducers'
import { allUsersReducer, contributorsReducer, userDeleteReducer, userDetailsReducer, userEditReducer, userLoginReducer, userProfileEditReducer, userProfileReducer, userRegisterReducer } from './reducers/userReducers'
import { taskAssignReducer, taskCreateMessageReducer, taskCreateReducer, taskDeleteReducer, taskDetailReducer, taskEditReducer, taskListReducer, taskUpdateToDoneReducer, taskUpdateToInProgressReducer } from './reducers/taskReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectCreate: projectCreateReducer,
    projectAddContributor: projectAddContributorReducer,
    projectEdit: projectEditReducer,
    projectDelete: projectDeleteReducer,

    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    userProfile: userProfileReducer,
    userProfileEdit: userProfileEditReducer,
    userEdit: userEditReducer,
    contributors: contributorsReducer,
    userDelete: userDeleteReducer,

    taskList: taskListReducer,
    taskDetail: taskDetailReducer,
    taskCreate: taskCreateReducer,
    taskAssign: taskAssignReducer,
    taskUpdateToInProgress: taskUpdateToInProgressReducer,
    taskUpdateToDone: taskUpdateToDoneReducer,
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