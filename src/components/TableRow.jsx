export const TableRow = ({css,children}) => {
  return (
    <tr className={css}>
        {children}
    </tr>
  )
}