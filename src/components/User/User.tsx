import React, {useState, useEffect} from 'react';
import FormUser from '../FormUser/FormUser';
import Users from '../Users/Users';
import {User as IUser} from '../../interfaces/User';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import {getUsers} from '../../actions/userActions';
import {createUser} from '../../services/createUser';
import Loading from '../common/Loading/Loading';
// let defaultValue: IUser[] = [];

function User() {
  // const [users, setUsers] = useState(defaultValue);
  const {data: users, loading} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const handleCreateUser = async (user: IUser) => {
  //   console.log(user);
  //   await createUser(user);
  //   setUsers([...users, user]);
  // };

  const handleClick = () => {
    console.log(users);
  };

  return (
    <>
      {/* <FormUser createUser={handleCreateUser} /> */}
      {loading ? <Loading /> : <Users users={users} />}
      <button onClick={handleClick}>call api</button>
    </>
  );
}

export default User;
