import React from "react";
import {DashBoardHeader} from "../component";
import Book3D from "../assets/book3d.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-home-screen bg-cover space-y-10">
      <DashBoardHeader />
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-start-3 col-span-8 gap-6 text-3xl font-semibold text-justify text-slate-50">
          <div className="flex justify-between">
            <h1 className="basis-1/3">
              Buy or Rent the books at cheaper price from your seniors , fellow
              here at Bookchowk
            </h1>
            <img src={Book3D} alt="Book3D" />
          </div>
          <div className="text-center text-xl flex flex-col items-center gap-8">
            <h1>Select the section you want to discover and trade</h1>
            <div className="w-9/12 bg-box-bg-color p-4 rounded-xl ring-1 ring-slate-50 border-slate-800 shadow-md shadow-slate-400 flex flex-col gap-6">
              <h1>Genre</h1>
              <div className="flex flex-row justify-evenly pb-4 child:pt-10 text-xl text-cyan-900 font-bold">
                <div
                  onClick={() => navigate("/book/novel")}
                  className="shadow-md shadow-slate-500 rounded-xl bg-select-screen h-28 w-48 ring-1 ring-slate-100 hover:scale-105 ease-in-out"
                >
                  <h1>Novel</h1>
                </div>
                <div
                  onClick={() => navigate("/book/course")}
                  className="shadow-md shadow-slate-500 rounded-xl bg-select-screen h-28 w-48 ring-1 ring-slate-100 hover:scale-105 ease-in-out"
                >
                  <h1>Course Material</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
