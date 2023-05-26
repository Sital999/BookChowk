import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, SignInImage } from "../elements/index";
import clsx from "clsx";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../features/user/userApi";
import { useDispatch } from "react-redux";
import {setUser} from "../features/user/userSlice"
import {setToken} from "../features/headerSlice"

const InputComponent = ({ type, icon }) => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const buttonText = type === "signup" ? "Sign Up" : "Login";
  // for passing value to register
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    department:"",
    semester:""
  });

  // for passing value to login
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (type === "signup") {
      setRegisterUser({ ...registerUser, [name]: value });
    } else {
      setLoginUser({ ...loginUser, [name]: value });
    }
  };

  const [register] = useRegisterUserMutation();
  const [login] = useLoginUserMutation();

  const handleClick = (e) => {
    e.preventDefault()
    if (type === "signup") {
      if (confirmPassword !== registerUser.password) {
        alert("Passwords do not match");
        setRegisterUser({ ...registerUser, password: "" });
        setConfirmPassword("");
      }
      // use RTK query hook
      register(registerUser).then((datas) => {

        if (datas.error) {
          alert(datas.error.data.msg);
          setConfirmPassword({
            name: "",
            email: "",
            password: "",
            semester:"",
            department:""
          });
          setConfirmPassword("");
        } else {
          navigate("/login");
        }
      });
    } else {
      login(loginUser).then((datas) => {
        if (!datas.error) {
          localStorage.setItem("token", datas.data.user.token);
          localStorage.setItem("user", JSON.stringify(datas.data.user));
          dispatch(setUser(datas.data.user));
          dispatch(setToken(datas.data.user.token));
          navigate("/dashboard");
        } else  {
          setLoginUser({
            email: "",
            password: "",
          });
          alert(datas.error.message)
        }
      });
    }
  };

  return (
    <div
      className={clsx(
        "box-border landing-page bg-bgColor grid grid-cols-12 grid-flow-row relative z-0 gap-1",{
          "min-h-[800px]" : type==="signup",
          "min-h-[680px]" : type==="login"
        }
      )}
    >
      {/* transparent circle */}
      <div className="  col-start-0 col-span-1 w-50 h-50 border-t-[50px] border-t-transparent  border-r-[100px] border-r-indigo-600  border-b-[50px] border-b-transparent opacity-60 bg-circleColor blur-3xl "></div>
      <div className="row-start-4 row-span-2 col-start-12 col-span-3 w-50 h-50 border-t-[50px] border-t-transparent border-r-[100px] border-r-indigo-600 border-b-[50px] border-b-transparent opacity-60 bg-circleColor blur-3xl "></div>
      {/* logo */}
      <Logo icon={icon} />
      {/* content */}
      <div className=" absolute z-10 col-start-4 col-span-6 row-start-2">
        <div className="rounded-lg grid grid-cols-6 grid-flow-row bg-slate-300 text-slate-100">
          <div
            className={clsx("col-start-1 m-10", {
              "space-y-5": type === "signup",
              "space-y-10": type === "login",
            })}
          >
            {/* name */}
            {type === "signup" ? (
              <input
                className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
                placeholder="Name"
                name="name"
                type="text"
                value={registerUser.name}
                onChange={handleChange}
              />
            ) : (
              <></>
            )}
            {/* email */}
            <input
              className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
              placeholder="Email"
              type="text"
              name="email"
              value={type === "signup" ? registerUser.email : loginUser.email}
              onChange={handleChange}
            />
            {/* password */}
            <input
              className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
              placeholder="Password"
              type="password"
              name="password"
              value={
                type === "signup" ? registerUser.password : loginUser.password
              }
              onChange={handleChange}
            />
            {/* confirm password */}
            {type === "signup" ? (
              <input
                className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
                placeholder="Confirm Password"
                type="password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            ) : (
              <></>
            )}
            {type === "signup" ? (
              <input
                className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
                placeholder="Semester"
                name="semester"
                type="text"
                value={registerUser.semester}
                onChange={handleChange}
              />
            ) : (
              <></>
            )}
            {type === "signup" ? (
              <input
                className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
                placeholder="Department"
                name="department"
                type="text"
                value={registerUser.department}
                onChange={handleChange}
              />
            ) : (
              <></>
            )}

            {/* signup button */}
            <button
              onClick={(e) => handleClick(e)}
              className="w-60 h-10 rounded-3xl text-slate-400 bg-slate-800 font-inputFont text-xl hover:bg-blue-900 hover:text-textColor active:bg-slate-900"
            >
              {buttonText}
            </button>
          </div>
          {/* image portion */}
          <SignInImage type={type} />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
