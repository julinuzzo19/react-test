import {Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getUsers, deleteUser} from '../../../actions/userActions';
import {User} from '../../../interfaces/User';
import {RootState} from '../../../reducers';
import Loading from '../../common/Loading/Loading';
import UserRow from '.././UserRow/UserRow';

const UserTable = () => {
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
            <UserRow
              users={users}
              handleRemoveItem={handleRemoveItem}
              handleUpdateItem={handleUpdateItem}
            />
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default UserTable;
