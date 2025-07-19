import React from 'react'
import Header from '../others/Header'
import TaskListnumber from '../others/TaskListnumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen w-screen bg-[#1c1c1c] '>
       <Header />
       <TaskListnumber />
       <TaskList />
       
    </div>
  )
}

export default EmployeeDashboard