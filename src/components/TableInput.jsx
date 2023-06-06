
const TableInput = ({css="",page,setPage,text}) => {
  return (
    <td className={`p-2.5 ${css}`}>
        <div className="flex items-center w-max space-x-2">
        <input className="w-5 rounded border border-solid border-[rgba(0,0,0,.2)] text-sm text-center" type="text" value={page} onChange={(e)=>setPage(e.target.value)}/>
        <p className="text-sm w-max">{text}</p>
        </div>
    </td>
  )
}

export default TableInput