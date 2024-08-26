import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data; 
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state,action) => {
                console.log(action)
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                console.log(action)
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                console.log(action)
            });
    }
});

export default postsSlice.reducer;
