import {Row, Col, Container, Form as FormReact, Button} from 'react-bootstrap';

const Form = ({handleSubmit, user, handleChange}: any) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <FormReact onSubmit={handleSubmit}>
            <FormReact.Group className='mb-3'>
              <FormReact.Label>Name User</FormReact.Label>
              <FormReact.Control
                type='text'
                name='full_name'
                placeholder='Enter User'
                onChange={handleChange && handleChange}
                value={user && user.full_name}
              />
              <FormReact.Label>Email User</FormReact.Label>
              <FormReact.Control
                type='text'
                name='email'
                placeholder='Enter email'
                onChange={handleChange && handleChange}
                value={user && user.email}
              />
              <FormReact.Label>ID User</FormReact.Label>
              <FormReact.Control
                type='number'
                name='id'
                placeholder='Enter id'
                value={user && user.id}
                disabled={user ? true : false}
              />
              <FormReact.Label>Upload image</FormReact.Label>
              <FormReact.Control
                type='file'
                name='image'
                placeholder='Enter url image'
               
              />
            </FormReact.Group>

            <Button variant='danger' type='submit'>
              Submit
            </Button>
          </FormReact>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
