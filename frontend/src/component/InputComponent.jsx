import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo, SignInImage } from "../elements/index";
import clsx from "clsx";

const InputComponent = ({ type, icon }) => {
  const navigate = useNavigate();
  const buttonText = type === "signup" ? "Sign Up" : "Login";
  return (
    <div className="box-border landing-page bg-bgColor min-h-screen grid grid-cols-12 grid-flow-row relative z-0 gap-1">
      {/* transparent circle */}
      <div className="  col-start-0 col-span-1 w-50 h-50 border-t-[50px] border-t-transparent  border-r-[100px] border-r-indigo-600  border-b-[50px] border-b-transparent opacity-60 bg-circleColor blur-3xl "></div>
      <div className="row-start-4 row-span-2 col-start-12 col-span-3 w-50 h-50 border-t-[50px] border-t-transparent border-r-[100px] border-r-indigo-600 border-b-[50px] border-b-transparent opacity-60 bg-circleColor blur-3xl "></div>
      {/* logo */}
      <Logo icon={icon} />
      {/* content */}
      <div className=" absolute z-10 col-start-4 col-span-6 row-start-2 ">
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
                type="text"
              />
            ) : (
              <></>
            )}
            {/* email */}
            <input
              className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
              placeholder="Email"
              type="text"
            />
            {/* password */}
            <input
              className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
              placeholder="Password"
              type="text"
            />
            {/* confirm password */}
            {type === "signup" ? (
              <input
                className="w-60 h-12 rounded-md bg-slate-800 text-slate-300 text-2xl p-3 text-center font-inputFont"
                placeholder="Confirm Password"
                type="text"
              />
            ) : (
              <></>
            )}
            {/* signup button */}
            <button
              onClick={() => {
                navigate("/");
              }}
              className="w-60 h-10 rounded-3xl text-slate-400 bg-slate-800 font-inputFont text-xl hover:bg-blue-900 hover:text-textColor active:bg-slate-900"
            >
              {buttonText}
            </button>
          </div>
          {/* image portion */}
          <SignInImage type={type}/>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
