export const BASE_URL = "http://127.0.0.1:8000/api/"

export const GET_ALL_PROJECTS_ENDPOINT = `${BASE_URL}projects/`
export const GET_SINGLE_PROJECT_ENDPOINT = `${BASE_URL}projects/`

export const CREATE_PROJECT_ENDPOINT = `${BASE_URL}projects/create/`
export const EDIT_PROJECT_ENDPOINT = `${BASE_URL}projects/edit/`
export const DELETE_PROJECT_ENDPOINT = `${BASE_URL}projects/delete/`

export const GET_PROJECT_TASKS_ENDPOINT = `${BASE_URL}tasks/for-project/`
export const CREATE_TASK_ENDPOINT = `${BASE_URL}tasks/create/`
export const DELETE_TASK_ENDPOINT = `${BASE_URL}tasks/delete/`

export const USER_REGISTER_ENDPOINT = `${BASE_URL}users/register/`
export const USER_LOGIN_ENDPOINT = `${BASE_URL}users/login/`