import React, {useContext} from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../contexts/ThemeContext';
const Container = styled.div`
  text-align: center;

  ${() => {
    const {theme} = useContext(ThemeContext);
    return theme == 'dark'
      ? `background-color:black; color:white;`
      : `background-color:white; color:black;`;
  }}
  bottom:0;
`;

const Footer = () => {
  return (
    <Container className='container-footer'>
      <h2 className='m-0'>Footer</h2>
    </Container>
  );
};

export default Footer;
