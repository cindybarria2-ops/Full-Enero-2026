import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Tema actual: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
};

export default ThemeToggle;