
export const usePaginate = ({data=[],page=1,limit=5}) => {
    const start = (page - 1) * limit
    const end = limit * page
    const total = Math.ceil(data.length / limit)
    return {newData:data.slice(start,end),totalPages:total}
}