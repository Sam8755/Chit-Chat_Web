import React from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import stores from "../reduxx/stores";
import useGetMessages from "../hooks/useGetMessages";

const MessageContainer = () => {
    
  const {selectedUser,authUser} = useSelector(stores=>stores?.user) 
 useGetMessages();
  

  const data = useSelector((stores)=>stores?.user?.selectedUser);
  

  
  
  
  // console.log(messageArr)
  return (

    selectedUser ? 
    <div className="md:min-w-[550px] flex flex-col bg-white bg-opacity-40 rounded-lg shadow-md p-4 backdrop-blur-lg">
      {/* User Information */}
      <div className="flex items-center gap-2 mb-4 bg-black rounded-t-lg text-white">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={data?.profilePhoto}
              alt="User Avatar"
            />
          </div>
        </div>
        <div>
          <div className="">{data?.fullName}</div>
        </div>
      </div>
      <Messages/>
      <Sendinput/>
    </div> :    <div className="md:min-w-[550px] flex flex-col justify-center h-screen mx-70 -my-20 text-black">  
    <h1 className="font-bold  text-4xl">hii! {authUser?.fullname}</h1>  
    <h1 className="text-2xl"> Let's  Start  Conversation</h1>  
        </div>
  );
};

export default MessageContainer;
