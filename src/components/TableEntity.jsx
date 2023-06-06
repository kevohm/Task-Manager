
export const TableEntity = ({item,css="",span}) => {
  return (
    <td className={`p-2.5 ${css}`} colSpan={span}>
        {item}
    </td>
  )
}
