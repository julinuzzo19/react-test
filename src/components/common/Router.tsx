import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Counter from '../Counter/Counter';
import UserForm from '../Users/UserForm/UserForm';
import UserEdit from '../Users/UserEdit/UserEdit';
import Users from '../Users/Users';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/form' element={<UserForm />} />
      <Route path='/users/:id' element={<UserEdit />} />
    </Routes>
  );
}

export default Router;
