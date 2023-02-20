import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/user'

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    users: database.users,
    loginUser: null
  },

  reducers: {
    handleLogin: (state, action) => {
      state.loginUser = state.users.find(user => user.loginId === action.payload.loginId && user.loginPassword === action.payload.loginPassword)
    },
    handleLogout: (state, action) => {
      state.loginUser = null
    },
    handelCreateUser: (state, action) => {
      state.users = [action.payload, ...state.users]
    }
  }
})

export const {handleLogin, handleLogout, handelCreateUser, handleQuizRecord} = userSlice.actions
export default userSlice.reducer