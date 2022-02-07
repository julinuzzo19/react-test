import React, {useState, useEffect} from 'react';
import FormUser from '../FormUser/FormUser';
import Users from '../Users/Users';
import {User as IUser} from '../../interfaces/User';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import {getUsers, postUsers} from '../../actions/userActions';
import Loading from '../common/Loading/Loading';

function User() {
  const {data: users, loading} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleCreateUser = async (user: IUser) => {
    await dispatch(postUsers(user));
  };

  const handleClick = () => {
    console.log(users);
  };

  return (
    <>
      <FormUser createUser={handleCreateUser} />
      {loading ? <Loading /> : <Users users={users} loading={loading} />}
      <button onClick={handleClick}>call api</button>
    </>
  );
}

export default User;
