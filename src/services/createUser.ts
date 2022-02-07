import axios from 'axios';
import {User} from './../interfaces/User';
export const createUser = (user: User) => {
  return axios
    .post(`http://localhost:3000/api/users/${user.id}`, user)
    .then(res => res)
    .catch(err => console.log(err));
};
