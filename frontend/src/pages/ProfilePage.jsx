import React,{useState} from "react";
import { DashBoardHeader, UpdateProfileSection ,ProfileSection,AddBook } from "../component";

const ProfilePage = () => {
  const [updateProfile,setUpdateProfile] = useState(false)
  const [addBook,setAddBook] = useState(false)
  return (
    <div className="min-h-screen bg-home-screen bg-cover space-y-10">
      <DashBoardHeader />
      <div className=" text-center text-slate-50 flex flex-col items-center gap-6">
        {addBook ? (
            <AddBook />
        ) : (
          <>
            <h1 className="font-bold text-2xl">PROFILE</h1>
            <div className=" rounded-3xl ring-2 ring-slate-50 bg-box-bg-color h-2/5 w-5/12 p-4 space-y-4 py-8">
              {updateProfile ? (
                <UpdateProfileSection setUpdateProfile={setUpdateProfile} />
              ) : (
                <ProfileSection
                  setUpdateProfile={setUpdateProfile}
                  setAddBook={setAddBook}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
