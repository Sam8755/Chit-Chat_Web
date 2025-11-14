import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name :"Message",
    initialState:{
        messages : []
    },

    reducers : {
        setNewMessages : (state,action)=>{
        state.messages = action.payload
        }
    }
})

export const {setNewMessages} = messageSlice.actions;
export default messageSlice.reducer;