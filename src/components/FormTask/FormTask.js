import {Row, Col, Container, Form, Button} from 'react-bootstrap';

function FormTask() {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Name Task</Form.Label>
              <Form.Control type='texr' placeholder='Enter task' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Description task</Form.Label>
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

export default FormTask;
