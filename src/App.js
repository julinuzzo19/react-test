import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Counter from './components/Counter/Counter';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/FormTask/FormTask';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Counter></Counter>
      <FormTask></FormTask>
      <Tasks></Tasks>
      <Footer></Footer>
    </div>
  );
}

export default App;
