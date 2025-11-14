import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        authUser : null,
        otheruser : null,
        selectedUser:null,
        Messages : [],
    },
    reducers : {
          setAuthUser : (state,action)=>{
            state.authUser = action.payload;
          },

          setotherUser : (state,action)=>{
            state.otheruser = action.payload;
          },
          setSelectedUser : (state,action)=>{
            state.selectedUser = action.payload;
          },
          
    }
    
})

export const {setAuthUser,setotherUser,setSelectedUser,setMessages} = userSlice.actions;
export default userSlice.reducer;