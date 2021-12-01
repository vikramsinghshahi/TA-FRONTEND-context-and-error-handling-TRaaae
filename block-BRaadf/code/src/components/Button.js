import React from "react";
import { useContext } from 'react';
import UserContext from '../Context';

export default function SwitchButton()
{
  const user = useContext(UserContext)
  let changeMode = user.changeMode;
  let isDarkMode = user.isDarkMode;
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

