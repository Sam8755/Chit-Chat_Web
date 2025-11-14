import { Route,Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

function App() {
   const[socket,setSocket] = useState(null);
  const {authUser} = useSelector(stores=>stores?.user);

  useEffect(()=>{
    if(authUser){
      const socket = io('http://localhost:8080',{

      });
      setSocket(socket);
    }
  },[authUser]);

  return (
    <div className="background">
      <Body/>
      <Toaster/>
    </div>
  );
}

export default App;
