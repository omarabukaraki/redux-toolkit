import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'
import postsReducer from './postsSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    auth: authReducer,
    posts: postsReducer
  },
  devTools:true
})
