import React from "react";
import login from "../assets/login.png";
import { Header, InputComponent } from "../component/index";

const LoginPage = () => {
  return (
    <div className={'h-screen bg-bgColor'}>
      <Header />
      <InputComponent type={"login"} icon={login} />
    </div>
  );
};

export default LoginPage;
