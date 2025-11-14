import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedUser } from '../reduxx/userSlice';

const OthersUser = (props) => {
  const user = props.user;
  const dispatch = useDispatch();
  const {selectedUser} = useSelector((stores)=>stores.user)
  async function UserHandler(user){
           dispatch(setSelectedUser(user));
  }

  return (
    <div>
        <div  onClick = {()=> UserHandler(user)}  className ={`${selectedUser?._id===user?._id ? 'bg-zinc-200':''} flex items-center gap-2 hover:bg-zinc-200 cursor-pointer`}>
             <div className='avatar online'> 
                <div className='w-12 rounded-full'>
                    <img src={user?.profilePhoto}/>
                </div>
             </div>

             <div className=''>
                <div className='text-black'>{user?.fullName}</div>
             </div>
        </div>

        <div className='h-px bg-black my-2'></div>
    </div>
  )
}

export default OthersUser