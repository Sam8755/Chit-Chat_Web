import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setotherUser } from '../reduxx/userSlice'

const useGetOtherUser = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUser = async()=>{
             try {

                 axios.defaults.withCredentials = true;
                 const res = await axios.get('http://localhost:8080/')
                 dispatch(setotherUser(res.data.otherusers));
                 console.log(res)
             } catch (error) {
                console.log(error)
             }
        }
       
         
        fetchOtherUser()
              
      },[])

}

export default useGetOtherUser





     
  

