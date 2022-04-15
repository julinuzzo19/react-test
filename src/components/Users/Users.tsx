import {Grid} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postUsers, postImageUser} from '../../actions/userActions';
import {User} from '../../interfaces/User';
import UserForm from './UserForm/UserForm';

import UserTable from './UserTable/UserTable';

function Users() {
  const dispatch = useDispatch();

  const handleCreateUser = async (user: User) => {
    console.log(user);
    dispatch(postUsers(user));
  };

  return (
    <Grid container spacing={1} marginTop='auto'>
      <Grid item xs={6} className='bg-danger' height={'auto'}>
        <UserForm createUser={handleCreateUser} />
      </Grid>
      <Grid item xs={6} className='bg-success' height={'auto'}>
        <UserTable />
      </Grid>
    </Grid>
  );
}

export default Users;
