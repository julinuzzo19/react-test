import {useContext} from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../contexts/ThemeContext';

const Titulo = styled.h1`
  color: red;
  text-align: center;
`;

const Header = () => {
  const {theme, handleTheme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Titulo>Header</Titulo>
      <button onClick={() => handleTheme('dark')}>Dark</button>
      <button onClick={() => handleTheme('light')}>Light</button>
    </div>
  );
};

export default Header;
