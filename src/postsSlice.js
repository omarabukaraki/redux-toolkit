import {  createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./apiUsers";

const initialState = {
    posts: [],
    isLoading:false,
    error:false,
};


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.error = action.error;
            });
    }
});

export default postsSlice.reducer;
