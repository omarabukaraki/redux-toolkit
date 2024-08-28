import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from './apiUsers';

const PostsComponent = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllPosts());
    },[])
    const data = useSelector(state=>state.posts);
    const isLoading = useSelector(state=>state.posts.isLoading);

  return (
    <div>
        {isLoading === true ? <h1>IsLoading...</h1> : (data.posts.map((post,index)=>{
            return <div style={{padding:'10px',margin:'10px',backgroundColor:'gray',borderRadius:'4px'}} key={index}>{post.title}</div>
        }))}
      
    </div>
  )
}

export default PostsComponent
