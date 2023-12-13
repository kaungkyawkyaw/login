import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes:["productApi"],
  endpoints: (builder) => ({
   getproduct:builder.query({
    query:(token)=>({
        url:`/products`,
        headers:{authorization:`Bearer ${token}`}
    }),
    providesTags:["productApi"]
   }),
   getsingleproduct:builder.query({
    query:({id,token})=>({
      url:`/products/find/${id}`,
      hearders:{authorization:`Bearer ${token}` }
    }),
    providesTags:["productApi"]
   })
  
  }),
})

export const { useGetproductQuery,useGetsingleproductQuery } = productApi