import {User} from './../interfaces/User';
import Axios from 'axios';

export const createUser = (user: User) => {
  return Axios.post(`http://localhost:3000/api/users/${user.id}`, user)
    .then(res => res.data)
    .catch(err => console.log(err));
};
