import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../feature/api/apiSlice'
// import counterReducer from './counterSlice'
// import authReducer from './authSlice'
// import postsReducer from './postsSlice'

export const store = configureStore({
  reducer: {
    // counter : counterReducer,
    // auth: authReducer,
    // posts: postsReducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
