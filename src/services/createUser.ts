import {User} from './../interfaces/User';
export const createUser = (user: User) => {
  let userJSON = JSON.stringify(user);

  return fetch('http://localhost:3000/api/users/16', {
    method: 'POST',
    body: userJSON
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
};
