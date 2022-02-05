import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Counter from '../Counter/Counter';
import FormUser from '../FormUser/FormUser';
import User from '../User/User';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/form' element={<FormUser />} />
    </Routes>
  );
}

export default Router;
