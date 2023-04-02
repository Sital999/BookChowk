import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashBoardHeader,BookComponent } from "../component";
import { SearchBar } from "../elements";
import { useGetBooksQuery } from "../features/book/bookApi";

const BookSectionPage = () => {
  const navigate=useNavigate()
  const { section } = useParams();
  const { data } = useGetBooksQuery();
  const [searchBooks,setSearchBooks] = useState([])
  const [isSearch,setIsSearch] = useState(false)
  
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
      <div className="text-slate-50 relative flex justify-center">
        <SearchBar setIsSearch={setIsSearch} setSearchBooks={setSearchBooks} />
        {isSearch ? (
          <div className="absolute z-10 w-1/4 text-center bg-slate-500 rounded-sm mt-10">
            {searchBooks && searchBooks.map((book) => {
              return (
                <div
                  className=" bg-slate-500 ring-1 ring-slate-50 p-1"
                  onClick={() => navigate(`/book/buy/${book.id}`)}
                >
                  {book.name}
                </div>
              );
            })}
          </div>
        ) : (
          <>
          </>
        )}
      </div>
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


