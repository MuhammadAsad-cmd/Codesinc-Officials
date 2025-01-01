import React from "react";

const ReusableButton = ({ text, onClickHandler, link = "#" }) => {
  return (
    <button
      onClick={onClickHandler}
      className="flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-lightblue px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue md:px-[60px]"
    >
      {text}
    </button>
  );
};

export default ReusableButton;
