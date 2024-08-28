import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data; 
});
