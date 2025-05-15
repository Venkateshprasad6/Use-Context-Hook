import React, { useContext } from 'react';
import { ThemeContext } from './First';

const Fourth = () => {
  const { theme } = useContext(ThemeContext);

  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return <h1 style={textStyle}>Fourth</h1>
};

export default Fourth;
