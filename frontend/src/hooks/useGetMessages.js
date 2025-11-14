import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewMessages } from '../reduxx/messgeSlice';




const useGetMessages = () => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector((stores)=>stores.user)
  
         useEffect(()=>{
              const fetchMessage = async()=>{
                try {
                  
                    axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/getmessage/${selectedUser?._id}`)
                
               
                // console.log(res?.data?.data)
                dispatch(setNewMessages(res?.data?.data))
               
                
                } catch (error) {
                    console.log(error)
                }
              }

              fetchMessage();
         },[selectedUser])
}

export default useGetMessages