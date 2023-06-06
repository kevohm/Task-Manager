import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Dashboard,Task} from "./pages/index"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/task" element={<Task/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router