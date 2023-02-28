import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setLogin, setRegister, setReset } from "../features/headerSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.header);
  const dispatch = useDispatch();

  return (
    <>
      {selector.login || selector.signup ? (
        <div className="flex flex-row justify-center pt-4 bg-bgColor">
          <div className="basis-12/12">
            <button
              onClick={() => {
                dispatch(setReset());
                navigate("/");
              }}
              className="text-textColor font-bold text-3xl"
            >
              BookChowk
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-center pt-4 bg-bgColor">
            <div className="basis-8/12">
              <h1 className="text-textColor font-bold text-3xl">BookChowk</h1>
            </div>
            <div className="basis-1/12">
              <button
                onClick={() => {
                  dispatch(setLogin());
                  navigate("/login");
                }}
                className="btn btn-primary rounded-xl pb-0.5 pl-4 pr-4 border-solid ring-2 ring-textColor text-textColor"
              >
                Login
              </button>
            </div>
            <div className="basis-1/12">
              <button
                onClick={() => {
                  dispatch(setRegister());
                  navigate("/registration");
                }}
                className="btn btn-primary rounded-xl pb-0.5 pl-4 pr-4 border-solid ring-2 ring-textColor text-textColor"
              >
                SignUp
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
