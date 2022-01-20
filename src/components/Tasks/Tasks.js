import React from 'react';
import {Row, Col, Table, Container} from 'react-bootstrap';
import styled from 'styled-components';

const ContainerStyled = styled(Container)``;

function Tasks() {
  return (
    <ContainerStyled fluid className="mt-5">
      <Row className='justify-content-md-center'>
        <Col md={8}>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </ContainerStyled>
  );
}

export default Tasks;
