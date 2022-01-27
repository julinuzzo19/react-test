import {createContext, useState} from 'react';

const ThemeContext = createContext();

const initialState = 'light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(initialState);

  const handleTheme = (theme) => {
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
