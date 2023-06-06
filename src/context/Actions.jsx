import { getCookie } from "../utils/cookie"
export const intitialState = {
    tasks: getCookie("tasks") || []
}

export const actions = {
    UPDATE_TASK:"UPDATE_TASK"
}