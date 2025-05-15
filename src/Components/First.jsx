import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const First = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>First</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
};

export default First;
