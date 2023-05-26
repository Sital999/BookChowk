import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateUserMutation } from "../features/user/userApi";
import { setUser } from "../features/user/userSlice"

const UpdateProfileSection = ({ setUpdateProfile }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [department, setDepartment] = useState(user.department);
  const [semester, setSemester] = useState(user.semester);
  const [email, setEmail] = useState(user.email);
  const [userImage, setImage] = useState(null);
  const formdata = new FormData();

  const [updateUserProfile] = useUpdateUserMutation();
  const handleClick = () => {
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("department", department);
    formdata.append("semester", semester);
    formdata.append("userImage", userImage);

    updateUserProfile(formdata)
      .then((datas) => {
        if (!datas.error) {
          localStorage.setItem("user", JSON.stringify(datas.data.user));
          dispatch(setUser(datas.data.user));
          setUpdateProfile(false);
        }
        else{
          alert(datas.error.message)
        }
      })

  };
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex">
        <div className="basis-1/2 text-start pl-4 space-y-7 font-semibold text-lg">
          <h1>Name</h1>
          <h1>Profile</h1>
          <h1>Email</h1>
          <h1>Semester</h1>
          <h1>Department</h1>
        </div>
        <div className=" text-end pr-4 font-semibold text-lg space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
          />
          <input
            type="file"
            defaultValue={userImage}
            name="userImage"
            onChange={(e) => setImage(e.target.files[0])}
            className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
          />
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
          />
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
          />
        </div>
      </div>
      <button
        className="bg-buyButton p-2 w-28 rounded-full"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateProfileSection;
