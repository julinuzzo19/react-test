import React from 'react';
import {Row, Col, Table, Container} from 'react-bootstrap';
import styled from 'styled-components';

const ContainerStyled = styled(Container)`
  margin-bottom: 77px !important;
`;

function Users({users}) {
  return (
    <ContainerStyled fluid className='mt-5'>
      <Row className='justify-content-md-center'>
        <Col md={8}>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </ContainerStyled>
  );
}

export default Users;
