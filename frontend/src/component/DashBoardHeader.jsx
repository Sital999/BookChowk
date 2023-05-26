import React from "react";
import {Link} from "react-router-dom"
import { ProfileImage } from "../elements";
import { useDispatch } from "react-redux";
import {resetUser} from "../features/user/userSlice"
import { setToken } from "../features/headerSlice";
import { useNavigate } from "react-router-dom";

const DashBoardHeader = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-12 text-5xl font-bold text-slate-50 p-4">
      <div className="col-start-3 col-span-9">
        <div className="flex justify-between items-start">
          <Link to="/dashboard">
            <h1>BookChowk</h1>
          </Link>
          <div className="flex gap-10 text-2xl font-semibold items-center">
            <h1 className="hover:underline hover:underline-offset-8">About</h1>
            <h1 className="hover:underline hover:underline-offset-8">
              Contact
            </h1>
            <h1 onClick={()=>{
                localStorage.removeItem('token');
              localStorage.removeItem('user');
                dispatch(resetUser())
                dispatch(setToken(""))
                navigate('/login')
            }} className="hover:underline hover:underline-offset-8 cursor-pointer">
              Logout
            </h1>
            <Link to="/profile">
              <ProfileImage className={"h-14 w-14"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
