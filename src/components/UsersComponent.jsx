import React from 'react'
import { useCreateUserMutation, useGetUsersQuery } from '../feature/api/apiSlice'

const UsersComponent = () => {
    const {data:users,isLoading,isError,isFetching} = useGetUsersQuery();
    // console.log(users,'data');
    // console.log(isLoading,'isLoading');
    // console.log(isError,'isError');
    // console.log(isFetching,'isFetching');
    const [createPost,{isLoading:cLoading}] = useCreateUserMutation();

    const handleAddPost = ()=>{
        createPost({
            body:'test request',
            id:'101',
            title:'omar abu karaki',
            userId:'101'
        });
    }
    
  return (
    <>
    <button onClick={handleAddPost}>Add Post</button>
     {isLoading !== true ? users.map((user,index)=>{
        return <div style={{margin:'10px',backgroundColor:'gray',padding:'5px'}} key={index}>{index+1}- {user.title}</div>
     }) : <h1>is Loading</h1>}
    </>
  )
}

export default UsersComponent
