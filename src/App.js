import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {BrowserRouter} from 'react-router-dom';

import {useEffect, useState} from 'react';
import {getUsers} from './services/getAllUsers';
import Router from './components/common/Router';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
