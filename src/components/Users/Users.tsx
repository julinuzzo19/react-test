import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
  Grid,
  Button,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/ModeEditOutline';

import {getUsers, deleteUser} from '../../actions/userActions';
import {User} from '../../interfaces/User';
import {RootState} from '../../reducers';
import Loading from '../common/Loading/Loading';

const DeleteIconStyled = styled(DeleteIcon)`
  color: black;
`;
const UpdateIconStyled = styled(UpdateIcon)`
  color: black;
`;

function Users() {
  const {
    data: users,
    loading,
    error
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleRemoveItem = (id: Number) => {
    dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const handleUpdateItem = (user: User) => {
    navigate(`/users/${user.id}`, {state: {user}});
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <Grid container className='mt-5'>
      <Grid item xs={4}>
        <Table sx={{minWidth: 650}}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Remove</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((item: User) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        handleRemoveItem(item.id);
                      }}
                    >
                      <DeleteIconStyled />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        handleUpdateItem(item);
                      }}
                    >
                      <UpdateIconStyled />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

export default Users;
