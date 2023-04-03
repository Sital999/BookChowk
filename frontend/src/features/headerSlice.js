import {createSlice} from "@reduxjs/toolkit"

const token = localStorage.getItem("token");


const initialState={
    login:false,
    signup:false,
    token:token?token:"",
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = true;
      state.signup = false;
    },
    setRegister: (state) => {
      state.signup = true;
      state.login = false;
    },
    setReset:(state)=>{
        state.login=false;
        state.signup=false
    },
    setToken:(state,action)=>{
      state.token=action.payload;
    }
  },
});

export default headerSlice.reducer
export const {setLogin,setRegister,setReset,setToken} = headerSlice.actions