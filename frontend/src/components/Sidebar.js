import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImSearch } from "react-icons/im";
import OtherUsers from "./OtherUsers";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { setotherUser, setSelectedUser } from "../reduxx/userSlice";
import stores from "../reduxx/stores";

const Sidebar = () => {
    
  const [search,setSearch] = useState("");
  
  const navigate = useNavigate();

  const {selectedUser} = useSelector(stores=>stores.user)

  const dispatch = useDispatch();

  const handleLogout = async()=>{
      axios.defaults.withCredentials = true;
      const res = await axios.get('http://localhost:8080/logout')
      toast.success("Logout Succesfully");
      navigate('/login');
      dispatch(setSelectedUser(null));

  }

  const SearchHandler = (e)=>{
    e.preventDefault();
        alert(search);
        

  }
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <form onSubmit={SearchHandler} className="flex items-center gap-0">
        <input
          
          onChange={(e)=>{setSearch(e.target.value)}}
          className="bg-white input input-bordered rounded-md text-black"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-square bg-white" type="submit">
          <ImSearch />
        </button>
      </form>

      <div className="h-px bg-blue-600 my-3"></div>
      <div className="divider divider-horizontal"></div>
      <OtherUsers />
      <div className="mt-2">
        <button onClick={handleLogout} className="btn btn-sm ">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
