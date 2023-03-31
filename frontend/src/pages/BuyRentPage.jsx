import React from "react";
import { DashBoardHeader } from "../component";
import { useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useSellBookMutation,
  useRentBookMutation,
} from "../features/book/bookApi";

const BuyRentPage = () => {
  const { type, bookId } = useParams();
  const { data } = useSingleBookQuery(bookId);
  let book;
  try {
    book = data.book;
  } catch (err) {
    book = "";
  }
  const [sellBook] = useSellBookMutation();
  const [rentBook] = useRentBookMutation();

  const handleSell = (e, bookId) => {
    e.preventDefault();
    sellBook(bookId)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRent = (e, bookId) => {
    e.preventDefault();
    rentBook(bookId)
      .then((data) => {
        try {
          if (data.error.status) {
            alert(data.error.data.msg);
          }
        } catch {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log("asd", err);
      });
  };

  return (
    <div className="min-h-screen bg-home-screen bg-cover space-y-10">
      <DashBoardHeader />
      <div className="flex flex-col gap-6 items-center text-slate-50">
        <h1 className="font-bold text-3xl">{book.name}</h1>
        <div className="flex justify-around bg-box-bg-color w-5/12  p-4 gap-8 rounded-xl ring-1 ring-slate-50 shadow-md shadow-slate-50">
          <div className="basis-1/2">
            <div className="flex flex-col items-center gap-4 bg-inputBox p-2 rounded-xl">
              <div className="">
                {book === "" ? (
                  <></>
                ) : (
                  <img
                    className="h-56 w-48"
                    src={require(`../media/Images/bookImage/${book.bookImage}`)}
                    alt="bookCardImage"
                  />
                )}
              </div>

              <div className="flex gap-4 text-slate-900 font-semibold">
                {type === "buy" ? (
                  <button
                    onClick={(e) => handleSell(e, book.id)}
                    className="bg-green-400 rounded-3xl w-20 p-2"
                  >
                    BUY
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleRent(e, book.id)}
                    className="bg-blue-500 rounded-3xl w-20 p-2 "
                  >
                    RENT
                  </button>
                )}
                <h1 className="bg-gray-500 rounded-2xl pt-2 text-slate-50 px-2">
                  Rs.{type === "buy" ? book.selling_price : book.rent_price}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-inputBox p-2 rounded-xl ring-1  ring-slate-400">
            {book.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyRentPage;
