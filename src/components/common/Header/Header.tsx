import { color } from "@mui/system";
import React, { useEffect } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
// import styled from 'styled-components';
// import ThemeContext from '../../../contexts/ThemeContext';

// const Titulo = styled.h1`
//   color: red;
//   text-align: center;
// `;

const Header = () => {
  const { theme, handleTheme } = React.useContext(ThemeContext);

  return (
    <div className={theme} style={{ textAlign: "center" }}>
      <h1 style={{ color: theme == "dark" ? "white" : "black" }}>Header</h1>
      <button onClick={() => handleTheme("dark")}>Dark</button>
      <button onClick={() => handleTheme("light")}>Light</button>
    </div>
  );
};

export default Header;
