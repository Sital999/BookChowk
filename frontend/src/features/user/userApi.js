import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const token =localStorage.getItem('token')

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/user",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: () => "/users",
      providesTags: ["user"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: "/update",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByNameQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation
} = userApi;
