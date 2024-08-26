import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from './postsSlice';

const PostsComponent = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllPosts());
    },[])
    const data = useSelector(state=>state.posts);

  return (
    <div>
        {data.posts.map((post,index)=>{
            return <div style={{padding:'10px',margin:'10px',backgroundColor:'gray',borderRadius:'4px'}} key={index}>{post.title}</div>
        })}
    </div>
  )
}

export default PostsComponent
