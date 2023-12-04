import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  user:null,
  token:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    adduser: (state,{payload}) => {
      state.user=payload,
      state.token=payload.accessToken,
      Cookies.set("user",JSON.stringify(state.user)),
      Cookies.set("token",state.token)
    },
    removeuser:(state)=>{
        state.user=null,
        state.token=null,
        Cookies.remove("user"),
        Cookies.remove("token")
    }
  },
})

// Action creators are generated for each case reducer function
export const { adduser,removeuser  } = authSlice.actions

export default authSlice.reducer