import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {BrowserRouter} from 'react-router-dom';

import Router from './components/common/Router';
import Navbar from './components/common/Navbar/Navbar';
import {ThemeProvider} from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Navbar />
          <Router />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
