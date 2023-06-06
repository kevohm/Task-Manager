import {getCookie} from "../utils/cookie"
import {useContextApi} from "../context/ContextApi"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

const Task = () => {
  const index = getCookie("task") || null
  const {tasks,updateTask} = useContextApi()
  const navigate = useNavigate()
  const [task,setTask] = useState(()=>(index !== null) ? tasks[Number(index)] : null)
  const [category,setCategory] = useState(task.status?"done":"pending")
  if(!task){
    return <Navigate to="/"/>
  }
  const handleStatus = (e)=>{
    const {value} = e.target
    if(value === "done"){
      setTask({...task,status:true})
      setCategory("done")
    }else{
      setTask({...task,status:false})
      setCategory("pending")
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    updateTask(Number(index),task)
    navigate("/")
  }
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full flex items-center justify-center py-10">
      <h2 className="text-2xl">Single Task</h2>
      </div>
    <form className="w-full flex flex-col items-center space-y-5 max-w-[400px] p-2" onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" className="px-2.5 py-2 w-full rounded bg-white text-[#242424] border border-[#242424] border-solid" value={task.name} onChange={(e)=>setTask({...task,name:e.target.value})}/>
      <select className="w-full capitalize cursor-pointer text-white bg-[rgba(0,0,0,.5)]  px-2.5 py-2 rounded" value={category} onChange={(e)=>handleStatus(e)}>
        <option value="" disabled={true}>choose status</option>
        <option value="done">done</option>
        <option value="pending">pending</option>
      </select>
      <input type="submit" className="w-full capitalize  cursor-pointer text-white bg-[#747bff]  px-2.5 py-2 rounded" value="update"/>
    </form>
    <Link to="/" className="px-2.5 py-2 rounded mt-10 bg-[#242424] text-white border border-[#242424] border-solid">Go Home</Link>
    </div>
  )
}

export default Task