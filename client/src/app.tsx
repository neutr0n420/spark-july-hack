import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom"

import Auth from "./pages/Auth"
import DashBoard from "./pages/Dashboard"

const App:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='dashboard' element={<DashBoard/>} /> 
    </Routes>
  )
}

export default App
