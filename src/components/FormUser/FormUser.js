import {Row, Col, Container, Form, Button} from 'react-bootstrap';

function FormUser({createUser}) {
  const handleSubmit = (e) => {
    console.log(e.target.elements);
    // const [name, value] = e.target.elements;
    e.preventDefault();
    //createUser(e.target);
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Name User</Form.Label>
              <Form.Control type='text' placeholder='Enter User' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Description User</Form.Label>
              <Form.Control as='textarea' placeholder='description' />
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
