import axios from 'axios'
import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../reduxx/userSlice'


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user,setUser] = useState({
    userName : "",
    password:""
  })
  const handleSignin = async(e)=>{
            e.preventDefault();
            
            try {
             const result = await axios.post('http://localhost:8080/login',user,{
              headers : {
                "Content-Type":'application/json'
              },
              withCredentials:true
             })
             
             toast.success("Login Succesfully")
             dispatch(setAuthUser(result?.data))
             navigate('/')
              
            } catch (error) {
              toast.error(error.response.data.message)
              console.log(error)
            }
  }
  return (
    <div className="relative h-screen">
 

    <div className="relative flex items-center justify-center h-full py-2">
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg w-72">
        <h2 className="text-2xl font-bold text-center text-white mb-0">Login</h2>
          <form className="space-y-2">
          
            <div>
              <label className="block  font-semibold text-white ">
                Username
              </label>
              <input
                value={user.userName}
                onChange={(e)=> setUser({...user,userName:e.target.value})}
                type="text"
                placeholder="Type here"
                className="text-white mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" /> 
            </div>

            <div>
              <label className="block font-semibold text-white ">
                Password
              </label>
              <input
                value={user.password}
                onChange={(e)=> setUser({...user,password:e.target.value})}
                type="text"
                placeholder="Type here"
                className="text-white mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className="mt-6 flex justify-center py-2">
              <input
                onClick={handleSignin}
                type="submit"
                value="Login"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 cursor-pointer"
              />
            </div>

            <div>
              <NavLink to="/register">Don't have an Account ? Signup</NavLink>
             </div>

            
          </form>
        </div>
      </div>

    

    </div>
    
  )
}

export default Login