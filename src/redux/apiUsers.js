import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return data; 
// });


// export const createPost = createAsyncThunk('posts/createPost',async (postData)=>{
//     localStorage.setItem('post',postData);
//     return false;
// });



export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
    const data = localStorage.getItem('posts');
    return data;
});


export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
    const pData = [postData];
    const localPostsData = localStorage.getItem('posts');

    if (localPostsData !== null) {
        localStorage.setItem('posts', localPostsData.toString().split(',').concat([postData]));
    }
    else {
        localStorage.setItem('posts', pData);
    }
    return false;
});

