import React, { useEffect } from "react";
import Header from "../component/Header";
// import { Icon } from "react-3d-icons";
// import { bookstack } from "react-3d-icons";
import book from "../assets/book.png";
import { useDispatch } from "react-redux";
import { setReset } from "../features/headerSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setReset());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="box-border landing-page bg-bgColor min-h-screen grid grid-cols-12 relative z-0 gap-1">
        {/* transparent circle */}
        <div className="  col-start-5 col-span-3 w-90 h-80 rounded-full opacity-60 bg-circleColor blur-3xl "></div>

        {/* content */}
        <div className="grid grid-rows-6 col-start-3 col-span-3 absolute z-10">
          <div className="row-start-2 row-span-3">
            <h1 className="text-textColor text-8xl font-bold ">
              Buy or Rent a Book
            </h1>
          </div>
          <div className="row-start-5 row-span-2 mt-20">
            <h1 className="text-textColor  text-2xl font-bold ">
              Place to save your money and get book at cheaper price
            </h1>
          </div>
        </div>
        <div className="col-start-6 col-span-4 row-start-7 ">
          <button className="rounded-full w-40 p-3 mr-12 bg-buyButton text-slate-200 text-2xl font-bold">
            Buy
          </button>
          <button className="rounded-full w-40 p-3 bg-buyButton text-slate-200 text-2xl font-bold">
            Rent
          </button>
        </div>
        <div className="col-start-8 col-span-5 relative z-0 grid grid-rows-3">
          <img
            className="absolute z-10"
            src={book}
            style={{ height: "600px", width: "600px" }}
            alt="book"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
/* Rectangle */
