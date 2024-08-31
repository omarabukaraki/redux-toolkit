import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// why we use rtk query insted of createAsyncThunk:
// 1-less code  
// 2- data cashing 
// 3-can revalidate the data 
// -feature inside redux tool kit


export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
        //Using tag type to resend request to get data 
        //1-
        tagTypes:["posts"],
        endpoints: (builder) => ({
            //Get Request:
            getUsers: builder.query({
                query: () => 'posts',
                //3-
                providesTags:["posts"],
            }),
            //Post Request:
            createUser:builder.mutation({
                query:(postData)=>({
                    url:'posts',
                    method:'POST',
                    body: postData
                }),
                //2-
                invalidatesTags:["posts"]
            })
        })
    }
);

export const { useGetUsersQuery ,useCreateUserMutation} = apiSlice; 
