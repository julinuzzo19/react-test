import React from 'react';
import {Link} from 'react-router-dom';
// import styled from 'styled-components';
// const Container = styled.div`
//   background-color: black;

//   text-align: center;
// `;
// const LinkStyled = styled(Link)`
//   margin: 0 20px;
//   color: white;
// `;

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='form'>Form</Link>
        <Link to='counter'>Counter</Link>
      </nav>
    </div>
  );
}

export default Navbar;
