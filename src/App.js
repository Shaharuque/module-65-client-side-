import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUsers from './components/addUsers/AddUsers';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AddUsers></AddUsers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
