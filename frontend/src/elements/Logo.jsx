import React from 'react'

const Logo = ({icon}) => {
  return (
    <div className="absolute z-20 col-start-4 row-start-1 m-36">
      <img
        src={icon}
        style={{
          height: "100px",
          width: "100px",
        }}
        alt="signUp"
      />
    </div>
  );
}

export default Logo;