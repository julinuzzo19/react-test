import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';
import FormUser from './components/FormUser/FormUser';
import {useEffect, useState} from 'react';
function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    return await fetch('http://localhost:3000/api/users/')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    async function get() {
      await getUsers();
    }
    get();
  }, []);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <div className='App'>
      <Header></Header>
      <Counter></Counter>
      <button onClick={() => handleClick()}>Click me</button>
      <FormUser></FormUser>
      <Users users={users}></Users>
      <Footer></Footer>
    </div>
  );
}

export default App;
