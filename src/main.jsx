import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { ContextApi } from './context/ContextApi.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
    <Router/>
    </ContextApi>
  </React.StrictMode>,
)
