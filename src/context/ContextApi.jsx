import React, { useContext, useReducer } from "react"
import { actions, intitialState } from "./Actions"
import { Reducer } from "./Reducer"
const AppContext = React.createContext()

const ContextApi = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,intitialState)
    const addTask = (task)=>{
        const taskFound = state.tasks.find((item)=>item.name === task.name)
        if(!taskFound){
            const tasks = [...state.tasks, task]
            const newTasks = tasks.map((i,index)=>{return {...i,id:index}})
            dispatch({
                type:actions.UPDATE_TASK,
                payload:{tasks:newTasks}
            })
        }
    }
    const deleteTask = (index)=>{
        const tasks = state.tasks.filter((item, i)=>i !== index)
        const newTasks = tasks.map((i,index)=>{return {...i,id:index}})
        dispatch({
            type:actions.UPDATE_TASK,
            payload:{tasks:newTasks}
        })
    }
    const updateTask = (index, task)=>{
        const tasks = state.tasks.map((item, i)=>(i === index) ? task : item)
        const newTasks = tasks.map((i,index)=>{return {...i,id:index}})
        dispatch({
            type:actions.UPDATE_TASK,
            payload:{tasks:newTasks}
        })
    }
  return (
    <AppContext.Provider value={{...state, addTask, deleteTask, updateTask }}>
        {children}
    </AppContext.Provider>
  )
}
const useContextApi = () => useContext(AppContext)

export {useContextApi, ContextApi}
