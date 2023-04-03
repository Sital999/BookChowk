import React from "react";
import Header from "../component/Header";
import InputComponent from "../component/InputComponent";
import signup from "../assets/signup.png";


const RegistrationPage = () => {
  return (
    <div className="min-h-fit">
      <Header />
      <InputComponent type={'signup'} icon={signup}/>
    </div>
  );
};

export default RegistrationPage;


