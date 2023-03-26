import React, { useState,useEffect } from "react";

const Dropdown = ({ title, contents, setValue, clicked }) => {
  const [hidden, setHidden] = useState(true);
  const [onSelectValue, setOnSelectValue] = useState("");
  const handleSelect = (e) => {
    setOnSelectValue(e.target.getAttribute("data-dropdown"));
    setValue(e.target.getAttribute("data-dropdown"));
    setHidden(!hidden);
  };
  useEffect(()=>{
      setOnSelectValue("")
  },[clicked])

  return (
    <div className="flex justify-end text-center">
      <div
        onClick={() =>{ setHidden(!hidden)}}
        className="relative w-7/12 bg-inputBox p-1 rounded-md ring-2 ring-slate-50 "
      >
        { onSelectValue ? onSelectValue : title}
        {hidden ? (
          <></>
        ) : (
          <div className="mt-1 absolute right-0 z-10 min-w-full bg-inputBox text-slate-900 backdrop-blur-sm rounded-md">
            {contents.map((content, index) => {
              return (
                <div
                  key={index}
                  onClick={handleSelect}
                  data-dropdown={content}
                  className="border-2 border-slate-100 ring-1 ring-slate-50 bg-buyButton rounded-md"
                >
                  {content}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
