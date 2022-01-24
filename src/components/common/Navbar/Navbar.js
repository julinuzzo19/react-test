import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  background-color: black;

  text-align: center;
`;
const LinkStyled = styled(Link)`
  margin: 0 20px;
  color: white;
`;

function Navbar() {
  return (
    <Container>
      <nav>
        <LinkStyled to='/'>Home</LinkStyled>
        <LinkStyled to='form'>Form</LinkStyled>
      </nav>
    </Container>
  );
}

export default Navbar;
