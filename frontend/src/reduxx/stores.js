import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import messageReducer from './messgeSlice'


const stores = configureStore({
      reducer : {
       user : userReducer,
       Message : messageReducer
        
      }
});

export default stores;