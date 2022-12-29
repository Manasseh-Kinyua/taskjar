// export const BASE_URL = "http://127.0.0.1:8000/api/"
const MODE  = process.env.REACT_APP_MODE
if(MODE === 'dev') {
    var BASE_URL = "http://127.0.0.1:8000/api/" 
} else if(MODE === 'prod') {
    var BASE_URL = "https://taskjar.up.railway.app/api/"
}

// export const BASE_URL = "https://taskjar.up.railway.app/api/"

export const GET_ALL_PROJECTS_ENDPOINT = `${BASE_URL}projects/`
export const GET_SINGLE_PROJECT_ENDPOINT = `${BASE_URL}projects/`

export const CREATE_PROJECT_ENDPOINT = `${BASE_URL}projects/create/`
export const ADD_PROJECT_CONTRIBUTORS_ENDPOINT = `${BASE_URL}projects/contributors/add/`
export const EDIT_PROJECT_ENDPOINT = `${BASE_URL}projects/edit/`
export const DELETE_PROJECT_ENDPOINT = `${BASE_URL}projects/delete/`

export const GET_PROJECT_TASKS_ENDPOINT = `${BASE_URL}tasks/for-project/`
export const GET_SINGLE_TASK_ENDPOINT = `${BASE_URL}tasks/`
export const CREATE_TASK_ENDPOINT = `${BASE_URL}tasks/create/`
export const CREATE_TASK_MESSAGE_ENDPOINT = `${BASE_URL}tasks/message/create/`
export const EDIT_TASK_ENDPOINT = `${BASE_URL}tasks/edit/`
export const ASSIGN_TASK_ENDPOINT = `${BASE_URL}tasks/assign-user/`
export const UPDATE_TASK_TO_IN_PROGRESS_ENDPOINT = `${BASE_URL}tasks/update/to-in-progress/`
export const UPDATE_TASK_TO_DONE_ENDPOINT = `${BASE_URL}tasks/update/to-done/`
export const DELETE_TASK_ENDPOINT = `${BASE_URL}tasks/delete/`

export const USER_REGISTER_ENDPOINT = `${BASE_URL}users/register/`
export const USER_LOGIN_ENDPOINT = `${BASE_URL}users/login/`
export const GET_USER_PROFILE_ENDPOINT = `${BASE_URL}users/profile/`
export const EDIT_USER_PROFILE_ENDPOINT = `${BASE_URL}users/profile/edit/`
export const GET_CONTRIBUTORS_ENDPOINT = `${BASE_URL}users/contributors/`
export const GET_ALL_USERS_ENDPOINT = `${BASE_URL}users/`
export const GET_USER_DETAILS_ENDPOINT = `${BASE_URL}users/`
export const EDIT_USER_ENDPOINT = `${BASE_URL}users/edit/`
export const DELETE_USER_ENDPOINT = `${BASE_URL}users/delete/`