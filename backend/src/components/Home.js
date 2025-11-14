import React from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='flex sm:w-[300px] md:w-[900px] h-[500px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Sidebar />
        <div className='flex-grow flex justify-end co'> {/* Adjusting flexbox properties */}
        <MessageContainer/>
      </div>
      </div>
    </div>
  );
};

export default Home;

