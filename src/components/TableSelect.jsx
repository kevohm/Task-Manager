
const TableSelect = ({limit,setLimit,css="",text}) => {
  return (
        <td className={`p-2.5 ${css}`}>
            <div className="w-full flex items-center w-max space-x-2">
            <p className="text-sm w-max">{text}</p>
            <select className="rounded border border-solid border-[rgba(0,0,0,.2)] text-sm text-center" value={limit} onChange={(e)=>setLimit(e.target.value)}>
                <option value={5} >5</option>
                <option value={10} >10</option>
                <option value={15} >15</option>
            </select>
            </div>
        </td>
  )
}

export default TableSelect