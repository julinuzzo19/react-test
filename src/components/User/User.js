import {useEffect, useState} from 'react';
import FormUser from '../FormUser/FormUser';
import Users from '../Users/Users';
import {getUsers} from '../../services/getAllUsers';

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function get() {
      //setUsers(await getUsers());
      setUsers([
        {
          id: 1,
          first_name: 'Juan',
          last_name: 'Perez',
          email: 'jp@gmail.com'
        },
        {
          id: 2,
          first_name: 'martin',
          last_name: 'Perez',
          email: 'jp@gmail.com'
        }
      ]);
    }
    get();
  }, []);

  const handleCreateUser = (user) => {
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
