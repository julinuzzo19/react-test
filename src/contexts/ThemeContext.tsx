import React from 'react';
import {createContext, useState} from 'react';

const ThemeContext = createContext<any>({});

const initialState = 'light';

const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState(initialState);

  const handleTheme = (theme: any) => {
    setTheme(theme);
  };

  const data = {
    theme,
    handleTheme
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;
