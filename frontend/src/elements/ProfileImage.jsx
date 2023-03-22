import React from 'react'
import No_Profile from "../assets/no_profile.png";
import { useSelector } from "react-redux";

import clsx from 'clsx';

const ProfileImage = ({className}) => {
  const { user } = useSelector((state) => state.user);
  const image = user===null?null:(user.userImage === "" ? null : user.userImage) 
  return (
    <div>
      {image === null ? (
        <>
          <img
            src={No_Profile}
            alt="dummyProfile"
            className={clsx(`rounded-full bg-slate-100 ${className}`)}
          />
        </>
      ) : (
        <img
          className={clsx(`rounded-full ${ className }`)}
          src={require(`../media/Images/userImage/${image}`)}
          alt="profileImage"
        />
      )}
    </div>
  );
}

export default ProfileImage