import React, {ChangeEvent} from 'react';

import {Row, Col, Container, Form, Button} from 'react-bootstrap';

interface Props {
  createUser?: any;
}

function FormUser({createUser}: Props) {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [nameElement, emailElement, idElement] = e.target.elements;

    let nameArray = (nameElement as HTMLInputElement).value.split(' ');

    let email = (emailElement as HTMLInputElement).value;
    let id = (idElement as HTMLInputElement).value;

    let first_name = nameArray[0];

    nameArray.shift();
    let last_name = nameArray.join(' ');

    createUser({id, email, first_name, last_name});
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Name User</Form.Label>
              <Form.Control type='text' name='name' placeholder='Enter User' />
              <Form.Label>Email User</Form.Label>
              <Form.Control type='text' name='email' placeholder='Enter email' />
              <Form.Label>ID User</Form.Label>
              <Form.Control type='number' name='id' placeholder='Enter id' />
            </Form.Group>

            <Button variant='danger' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormUser;