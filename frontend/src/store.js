import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectCreateReducer, projectDetailsReducer, projectListReducer } from './reducers/projectReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectCreate: projectCreateReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store