import React from "react";
import login from "../assets/login.png";
import { Header, InputComponent } from "../component/index";

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <InputComponent type={"login"} icon={login} />
    </>
  );
};

export default RegistrationPage;
