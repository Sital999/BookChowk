import React from 'react'

const BookComponent = ({book}) => {
  return (
    <div className="grid-flow-row grid-rows-2 rounded-2xl bg-bookBox p-2 w-72 space-y-2">
      <div className="flex justify-evenly">
        <div className="basis-1/2">
          <img
            src={require(`../media/Images/bookImage/${book.bookImage}`)}
            alt="bookImage"
          />
        </div>
        <div className="flex flex-col justify-around text-center text-black text-lg font-bold gap-6">
          <div className="space-y-3">
            <div className="bg-gray-500 rounded-lg text-slate-50">
              {book.selling_price}
            </div>
            <button className="bg-green-400 rounded-3xl w-20">BUY</button>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-500 rounded-lg text-slate-50">
              {book.rent_price}
            </div>
            <button className="bg-blue-500 rounded-3xl w-20">RENT</button>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold text-xl">{book.name}</div>
    </div>
  );
}

export default BookComponent