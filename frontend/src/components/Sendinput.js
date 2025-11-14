import axios from 'axios';
import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setNewMessages } from '../reduxx/messgeSlice';



const Sendinput = () => {
  const dispatch = useDispatch();

  const {messages} = useSelector(stores=>stores?.Message)
  const [message,setMessage] = useState("");
 
 const selecteduser = useSelector((stores)=>stores?.user?.selectedUser);
//  if(selecteduser)
//  console.log("inside SendInput")
// console.log(selecteduser)
  const SubmitHandler = async(e)=>{
     e.preventDefault();
     try {
     

      const res = await axios.post(`http://localhost:8080/message/${selecteduser?._id}`,{message},{
        headers : {
          "Content-Type" : 'application/json'
        },
        withCredentials:true

      });
      console.log("inside Send Input")
      console.log(res);
       if(messages){
        dispatch(setNewMessages([...messages,res?.data?.newMessage]))
       } 
       else{
        dispatch(setNewMessages([res?.data?.newMessage]))
       }
     

     
  
      setMessage('');

     } catch (error) {
      
      console.log(error)
     }
  }
  return (
   <form onSubmit={SubmitHandler}>
    <div className='relative w-full'>
        <input 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        type='text'
        placeholder='  Send a message...'
        className='border text-sm rounded-lg border-zinc-500 block w-full bg-slate-800 text-white py-2'
        />

        <button type='submit' className='absolute flex inset-y-0 end-0 items-center mx-3'>
          <BsSend />
        </button>
    </div>
   </form>
  )
}

export default Sendinput