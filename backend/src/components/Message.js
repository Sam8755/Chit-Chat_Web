import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Message = (props) => {
  const {authUser,selectedUser} = useSelector(stores=>stores.user)
  console.log("Inside Message",authUser)
  let message = props.message;
  const scroll = useRef();
  useEffect(()=>{
      scroll.current?.scrollIntoView({behavior:"smooth"})
  },[message])
  return (
    <div>
      <div ref={scroll} className={`${authUser?._id === message?.senderId ? 'chat chat-end' : 'chat-start'} `}>
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="User Avatar"
               src={authUser?._id === message?.senderId ? authUser?.profilePhoto : selectedUser?.profilePhoto }
            />
          </div>
        </div>

        
        <div className="chat-bubble">
          {
            message?.message
          }

          
          <div className='chat-footer mt-1 text-right'>
            <time className='text-xs opacity-50 text-white'>12:45</time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
