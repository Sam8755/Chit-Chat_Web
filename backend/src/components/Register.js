import React from 'react';
import { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { BG_IMG } from '../utils/constants';


const Register = () => {
  
    const navigate  = useNavigate();
    const [gender, setGender] = useState('');
    const [user,setUser] = useState({
      fullName:"",
      userName:"",
      password:"",
      Confirmpassword:"",
      gender:""
    })

    
    const handlegender = (e)=>{
      const SelectGender = e.target.value; 
      setGender(SelectGender);
      setUser({
        ...user,gender:SelectGender
      })
    }

    
    const handleSignup = async(e)=>{
        e.preventDefault();
        console.log(user)
        try {
          const result = await axios.post('http://localhost:8080/register',user,{
            headers :{
              'Content-Type':'application/json'
            },
            withCredentials:true
          });
          if(result.data.message==="Signup Succesfully"){
            console.log("inside toast")
            toast.success(result?.data?.message);
          }
          navigate('/login')
  
          console.log(result) 
        } catch (error) {
          
          console.log(error);
        }

        


        setUser({
          fullName:"",
      userName:"",
      password:"",
      Confirmpassword:"",
      gender:""
        })
        setGender("");
    }

    

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative flex items-center justify-center h-full py-2">
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg w-72">
        <h2 className="text-2xl font-bold text-center text-white mb-0">Signup</h2>
          <form className="space-y-2">
            <div>
              <label className="block font-semibold text-white ">
                Full Name
              </label>
              <input
                value={user.fullName}
                onChange={(e)=>setUser({...user,fullName : e.target.value})}
                type="text"
                placeholder="Type here"
                className="mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block  font-semibold text-white ">
                Username
              </label>
              <input
                value={user.userName}
                 onChange={(e)=>setUser({...user,userName: e.target.value})}
                type="text"
                placeholder="Type here"
                className="mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" /> 
            </div>

            <div>
              <label className="block font-semibold text-white ">
                Password
              </label>
              <input
                value={user.password}
                onChange={(e)=>setUser({...user,password: e.target.value})}
                type="text"
                placeholder="Type here"
                className="mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block font-semibold text-white ">
                Confirm Password
              </label>
              <input
                value={user.Confirmpassword}
                onChange={(e)=>setUser({...user,Confirmpassword:e.target.value})}
                type="text"
                placeholder="Type here"
                className="mt-1 w-60 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>


            <div className="mt-4">
              <label className="block text-lg font-semibold text-white">
                Gender
              </label>
              <div className="flex items-center mt-2 space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handlegender}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-white">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handlegender}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-white">Female</span>
                </label>
              </div>
            </div>
             
             
              
             
            <div className="mt-6 flex justify-center py-2">
              <input
                onClick={handleSignup}
                type="submit"
                value="SignUp"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 cursor-pointer"
              />
            </div>

            <div>
              <NavLink to="/login">Already have an account ? Login</NavLink>
             </div>

            
          </form>
        </div>
      </div>
    </div>
  );
};



export default Register;
