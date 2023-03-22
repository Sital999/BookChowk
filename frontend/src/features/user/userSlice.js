import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user")) 

const initialState = {
  user: user ? user : null,
  isLoading: false,
};

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false;
        },
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }

})

export const {reset,setUser}=userSlice.actions
export default userSlice.reducer