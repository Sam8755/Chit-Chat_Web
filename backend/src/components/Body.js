import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/'  element = {<Home/>}/>
        </Routes>
    </div>
  )
}

export default Body