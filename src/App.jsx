import { useEffect, useState } from 'react'

import './App.css'
import Login from './Component/Auth/Login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/Localstorage'

function App() { 
 useEffect(() => {
   setLocalStorage()
 },)  

  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  )
}

export default App
