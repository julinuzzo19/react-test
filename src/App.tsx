import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import store from './store';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Router from './components/common/Router';
import Navbar from './components/common/Navbar/Navbar';
import {ThemeProvider} from './contexts/ThemeContext';
import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Navbar />
        <Router />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
