import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
