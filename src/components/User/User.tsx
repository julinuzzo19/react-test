import React, {useEffect} from 'react';
import FormUser from '../FormUser/FormUser';
import Users from '../Users/Users';
import {User as IUser} from '../../interfaces/User';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import {postUsers} from '../../actions/userActions';

function User() {
  const dispatch = useDispatch();
  const {data: users} = useSelector((state: RootState) => state.user);

  const handleCreateUser = async (user: IUser) => {
    await dispatch(postUsers(user));

  };

  const handleClick = () => {
    console.log(users);
  };

  return (
    <>
      <FormUser createUser={handleCreateUser} />
      <Users />
      <button onClick={handleClick}>call api</button>
    </>
  );
}

export default User;
