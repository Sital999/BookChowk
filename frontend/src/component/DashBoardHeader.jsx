import React from "react";

const DashBoardHeader = () => {
  return (
    <div className="grid grid-cols-12 text-5xl font-bold text-slate-50 p-4">
      <div className="col-start-3 col-span-9">
        <div className="flex justify-between items-end">
          <h1>BookChowk</h1>
          <div className="flex gap-10 text-2xl font-semibold">
            <h1 className="hover:underline hover:underline-offset-8">About</h1>
            <h1 className="hover:underline hover:underline-offset-8">
              Contact
            </h1>
            <h1 className="hover:underline hover:underline-offset-8">
              Notification
            </h1>
            <h1 className="hover:underline hover:underline-offset-8">
              Profile
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
