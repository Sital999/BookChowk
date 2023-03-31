import React from "react";
import { useParams } from "react-router-dom";
import { DashBoardHeader,BookComponent } from "../component";
import { useGetBooksQuery } from "../features/book/bookApi";

const BookSectionPage = () => {
  const { section } = useParams();
  const { data } = useGetBooksQuery();
  // const books=data.book
  let books;
  try{
  if (section === "course") {
    books = data.course_books;
  } else {
    books = data.novels;
  }
  console.log(books);
  }
  catch(err){
    books=[]
  }


  return (
    <div className="min-h-screen bg-home-screen bg-cover space-y-10">
      <DashBoardHeader />
      <div className="flex flex-col items-center text-slate-200 gap-3">
        <h2 className="font-semibold text-3xl">{section.toUpperCase()}</h2>
        <div className="flex flex-wrap justify-between ring-1 ring-slate-100 bg-box-bg-color overflow-x-hidden w-8/12 p-4 mb-8 rounded-lg shadow-md shadow-slate-500">
          {books.map((book) => {
            return (
              <div key={book.id} className=" p-4">
                <BookComponent book={book} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookSectionPage;
