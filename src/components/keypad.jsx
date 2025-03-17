import React from "react";

function Keypad() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return buttonNames.map((buttonName) => (
    <button className="bg-gray-300 px-5 py-2.5 text-center me-2 mb-2  ">
      {buttonName}
    </button>
  ));
}

export default Keypad;
