import React, {useEffect, useState} from 'react';
import {getUsers} from '../../services/getAllUsers';
import FormUser from '../FormUser/FormUser';
import Users from '../Users/Users';
import {User as IUser} from '../../interfaces/User';

let defaultValue: IUser[] = [];

function User() {
  const [users, setUsers] = useState(defaultValue);
  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(err => console.log(err));
  }, []);

  const handleCreateUser = (user: IUser) => {
    console.log(user);
    setUsers([...users, user]);
  };

  const handleClick = () => {
    console.log(users);
  };

  return (
    <>
      <FormUser createUser={handleCreateUser} />
      <Users users={users} />
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default User;
