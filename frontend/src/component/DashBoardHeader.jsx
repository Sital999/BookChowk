import React from "react";
import { useGetUserByNameQuery } from "../features/userApi";
import No_Profile from "../assets/no_profile.png"

const DashBoardHeader = () => {
  const { data } = useGetUserByNameQuery();
  const image =
    data.users[0].userImage === "" ? null : data.users[0].userImage === "";

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
            <div>
              {image === null ? (
                <>
                  <img
                    src={No_Profile}
                    alt="dummyProfile"
                    className="rounded-full h-14 w-14"
                  />
                </>
              ) : (
                <img
                  className="rounded-full h-14 w-14"
                  src={require(`../media/Images/userImage/${image}`)}
                  alt="profileImage"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
