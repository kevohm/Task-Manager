export const Button = (
    {bg,
    color,
    text="",
    onClick=()=>{}} 
    ) => {
  return (
    <button className={`px-2 py-1 mr-2 border-none rounded-lg bg-${bg} text-orange-600`} onClick={onClick}>
        {text}
    </button>
  )
}
