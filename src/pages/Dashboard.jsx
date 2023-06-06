import { useState } from "react"
import Table from "../components/Table"
import { useContextApi } from "../context/ContextApi"

const Dashboard = ()=> {
  const {addTask,tasks} = useContextApi()
  const [task,setTask] = useState({name:"",status:false}) 
  const [disable,setDisable] = useState(true)
  const changeTask = (e)=>{
    const {value} = e.target
    if(value){
      setDisable(false)
    }else{
      setDisable(true)
    }
    setTask({...task,name:value})
    const newTask = tasks.find((i)=>i.name === value)
    if(newTask){
      setDisable(true)
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(task){
      addTask(task)
      setDisable(true)
    }else{
      alert("Please task required!!")
    }
  }
  return (
    <main className="w-full max-w-[400px] lg:max-w-[500px] px-10 md:px-0 mx-auto mb-auto">
      <div className="w-full flex items-center justify-center py-10">
      <h2 className="text-2xl">Task Manager</h2>
      </div>
      <form className="w-full mx-auto max-w-[400px] flex items-center justify-center" onSubmit={(e)=>handleSubmit(e)}>
        <div className="w-full mr-2.5">
        <input type="text" placeholder="Start Typing..." value={task.name} onChange={(e)=>changeTask(e)} className="px-2.5 py-2 w-full rounded bg-white text-[#242424] border border-[#242424] border-solid"/>
        </div>
        <div className="">
        {
          disable?
          <input type="button" title="disabled" value="Add Task" className="cursor-not-allowed text-white bg-[rgba(0,0,0,.5)] px-2.5 py-2 rounded"/>
          :
          <input type="submit" value="Add Task" className="cursor-pointer text-white bg-[#747bff]  px-2.5 py-2 rounded"/>
        }
        </div>
        
      </form>
      <div className="w-full mt-10 rounded-lg overflow-x-scroll overflow-y-auto border border-solid border-[rgba(0,0,0,.1)] shadow shadow-[rgba(0,0,0,.1)] hover:shadow-lg">
      <Table/>
      </div>
    </main>
  )
}

export default Dashboard
