import React from 'react'
import { useSelector } from "react-redux";
import { ProfileImage } from "../elements";

const ProfileSection = ({ setUpdateProfile }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="flex justify-center">
        <ProfileImage className={"h-32 w-32"} />
      </div>
      <div className="text-xl font-semibold flex justify-evenly">
        <button
          className="rounded-full bg-buyButton w-48  h-12"
          onClick={() => setUpdateProfile(true)}
        >
          Update Profile
        </button>
        <button className="rounded-full bg-buyButton w-48 h-12">
          Add Book
        </button>
      </div>
      <div className="pt-14 flex">
        <div className="basis-1/2 text-start pl-4 space-y-3 font-semibold text-lg">
          <h1>Name</h1>
          <h1>Email</h1>
          <h1>Semester</h1>
          <h1>Department</h1>
        </div>
        <div className="basis-1/2 text-end pr-4 font-semibold text-lg">
          <h1>{user.name}</h1>
          <div className="border-t-2 border-slate-50 pb-2"></div>
          <h1>{user.email}</h1>
          <div className="border-t-2 border-slate-50 pb-2"></div>
          <h1>{user.semester ? user.semester : "Not Provided"}</h1>
          <div className="border-t-2 border-slate-50 pb-2"></div>
          <h1>{user.department ? user.department : "Not Provided"}</h1>
          <div className="border-t-2 border-slate-50 pb-2"></div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;