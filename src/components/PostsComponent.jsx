import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, deletePost, getAllPosts } from '../redux/apiUsers';

const PostsComponent = () => {
    const postCreated = useSelector(state=>state.posts.postCreated);

    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllPosts());
    },[postCreated])
    const data = useSelector(state=>state.posts);
    const isLoading = useSelector(state=>state.posts.isLoading);

    const inputField = useRef();
    const [inputVal,setInputVal] = useState('');

    const handleSubmit =()=>{
        if(inputVal !== ''){
            dispatch(createPost(inputVal));
            setInputVal('')
            inputField.current.value = '';
            
        }else{
            console.log('plz fill post data');
        }
    }
    

  
  return (
    <div>
        <input ref={inputField} placeholder='post name' onChange={(e)=>{
           setInputVal(e.target.value);
        }}/>
        <button onClick={handleSubmit}>submit post</button>
        {isLoading === true ? <h1>IsLoading...</h1> : (data.posts && data.posts.length !== 0 ?  data.posts.split(',').reverse().map((post,index)=>{
            return <div style={{padding:'10px',margin:'10px',backgroundColor:'gray',borderRadius:'4px'}} key={index}>{post}</div>
        }): '')}
    </div>
  )
}

export default PostsComponent
