import React, {useEffect} from 'react';
import {Row, Col, Table, Container} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../../actions/userActions';
import {User} from '../../interfaces/User';
import {RootState} from '../../reducers';
import Loading from '../common/Loading/Loading';
// import styled from 'styled-components';

// const ContainerStyled = styled(Container)`
//   margin-bottom: 77px !important;
// `;

function Users() {
  const {
    data: users,
    loading,
    error
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container fluid className='mt-5'>
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
              {users &&
                users.map((item: User) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
