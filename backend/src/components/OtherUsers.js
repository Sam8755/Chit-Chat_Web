import React from 'react'
import OthersUser from './OthersUser'
import useGetOtherUser from '../hooks/useGetOtherUser'
import { useSelector } from 'react-redux';



const OtherUsers = () => {
  useGetOtherUser();
  const {otheruser} = useSelector((stores)=>stores.user)
   if(!otheruser) return "please logged in";

  return (
    <div className='overflow-auto'>

      {
         otheruser?.map((user)=>{
          return (
            <OthersUser key={user._id} user={user}/>
          )
         })
      }
  
    </div>
  )
}

export default OtherUsers