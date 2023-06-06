import { actions } from "./Actions"
import {setCookie} from "../utils/cookie"

export const Reducer = (state, action)=>{
    switch (action.type) {
        case actions.UPDATE_TASK:{
            const {tasks} = action.payload
            setCookie("tasks", tasks)
            return {...state, tasks}
        }

        default:
           throw new Error(`No action as ${action.type}`)
    }
}