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
    },
    handelQuizRecord: (state, action) => {
      state.loginUser.quizRecord.unshift(action.payload)

      state.users = [
        ...state.users.filter(user => user.name !== state.loginUser.name),
        state.loginUser
      ]
    }
  }
})

export const {handleLogin, handleLogout, handelCreateUser, handelQuizRecord} = userSlice.actions
export default userSlice.reducer