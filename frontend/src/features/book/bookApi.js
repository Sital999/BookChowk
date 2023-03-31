import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Novel="Novel";

const Course_Material="Course_Material";

const token = localStorage.getItem("token");

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/book",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
        query:()=>'/',
        providesTags:['book'],
        transformResponse:((books)=>{
          const course_books=books.books.filter((book)=>book.genre===Course_Material)
          const novels = books.books.filter(
            (book) => book.genre === Novel
          );
          return {
            course_books,novels
          }
        })
    }),
    searchBook: builder.query({
      query: () => "/search",
      providesTags: ["book"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddBookMutation,
  useGetBooksQuery,
  useSearchBookQuery
} = bookApi;
