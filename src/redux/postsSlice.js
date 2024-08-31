import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, getAllPosts } from "./apiUsers";

const initialState = {
    posts: [],
    isLoading: false,
    error: false,
    postCreated: false,
    postCreateLoading: false,
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
            }).addCase(createPost.pending, (state) => {
                state.postCreateLoading = true;
                state.postCreated=true;
            }).addCase(createPost.fulfilled, (state, action) => {
                state.postCreated = action.payload;
            }).addCase(createPost.rejected, (state) => {
                state.postCreated = false;
            });
    }
});

export default postsSlice.reducer;
