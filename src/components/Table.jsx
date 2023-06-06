import { useContextApi } from "../context/ContextApi";
import { TableEntity } from "./TableEntity";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {setCookie} from "../utils/cookie"
import { TableRow } from "./TableRow";
import { useNavigate } from "react-router-dom";
import {usePaginate} from "../hooks/usePaginate"
import { useEffect, useState } from "react";
import TableInput from "./TableInput";
import TableSelect from "./TableSelect"
import {MdDelete} from "react-icons/md"
import {ImBin} from "react-icons/im"


const Table = () => {
  const { tasks, deleteTask } = useContextApi();
  const navigate = useNavigate()
  const [page,setPage] = useState(1)
  const [input,setInput] = useState(1)
  const [total, setTotal] = useState(1)
  const [limit, setLimit] = useState(5)
  const [data,setData] = useState([])

  const headings = ["#", "Task", "Status", "Actions"];
  const handleUpdate = (e,index)=>{
    e.preventDefault()
    setCookie("task",index)
   return navigate("/task")
  }
  const handleDelete = (index)=>{
    deleteTask(index)
  }
  const handlePage = (val)=>{
    const num = Number(val)
    setInput(val)
    if(!isNaN(num)){
      if(val <= total && val > 0){
        setPage(val)
      }
    }
  }
  const fetchData = ()=>{
    const {newData,totalPages} = usePaginate({data:tasks,page,limit})
    setData(newData)
    setTotal(totalPages)
  }
  useEffect(()=>{
    fetchData()
  },[tasks,limit,page])
  return (
    <table className="bg-white w-full  min-w-[400px] rounded-lg">
      <thead>
        <TableRow
          css={
            "border border-solid border-transparent border-b-[rgba(0,0,0,.1)]"
          }
        >
          {headings.map((i) => (
            <TableEntity key={i} item={i} />
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <TableRow
            css={
              "border border-solid border-transparent border-b-[rgba(0,0,0,.1)]"
            }
          >
            <TableEntity css={"text-center"} item={"No task yet"} span={4} />
          </TableRow>
        ) : (
          <>
            {data.map((item, index) => (
              <TableRow
                key={index}
                css={
                  "border border-solid border-transparent border-b-[rgba(0,0,0,.1)]"
                }
              >
                <TableEntity item={index} />
                <TableEntity item={item.name} />
                <TableEntity item={item.status ? (
                  <button className="px-2 py-1 mr-2 border-none rounded-lg bg-green-50 text-green-400">done</button>
                  ) : (
                    <button className="px-2 py-1 mr-2 border-none rounded-lg bg-orange-50 text-orange-400">pending</button>
                  )}/>
                <TableEntity item={<div className="cursor-pointer flex items-center space-x-2">
                <div title="update" className="p-2 text-white bg-[#747bff]  border-none rounded-lg flex items-center justify-center" onClick={(e) => handleUpdate(e,item.id)} >
                  <AiFillEdit  className="bg-[#747bff] "/>
                </div>
                <div title="delete" className="cursor-pointer bg-red-500 p-2 text-white  border-none rounded-lg flex items-center justify-center" onClick={() => handleDelete(index)}>
                <ImBin className="bg-red-500"/>
                </div>
                </div>}/>
              </TableRow>
            ))}
          </>
        )}
      </tbody>
      <tfoot>
        <TableRow>
          <TableInput page={input} setPage={handlePage} text={`of ${total}`}/>
          <TableEntity span={2}/>
          <TableSelect limit={limit} setLimit={setLimit} text="showing" />
        </TableRow>
      </tfoot>
    </table>
  );
};

export default Table;
