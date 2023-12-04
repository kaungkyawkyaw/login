// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/auth' }),
  tagTypes:["authApi"],
  endpoints: (builder) => ({
   register:builder.mutation({
    query:(user)=>({
        url:`/register`,
        method: "POST",
        body: user
    }),
    invalidatesTags:["authApi"]
   }),
   getlogin:builder.mutation({
    query:(user)=>({
      url:`/login`,
      method: "POST",
      body: user
    }),
    invalidatesTags:["authApi"]
   }),
  }),
})

export const { useRegisterMutation, useGetloginMutation } = authApi