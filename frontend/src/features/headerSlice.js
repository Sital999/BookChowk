import {createSlice} from "@reduxjs/toolkit"

const initialState={
    login:false,
    signup:false
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
    }
  },
});

export default headerSlice.reducer
export const {setLogin,setRegister,setReset} = headerSlice.actions