import React from 'react';
import './App.css'
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About'
import Header from './component/Header/Header';
import Service from './component/Service/Service';
import Review from './component/Review/Review';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
      </Routes>
    </div>
  );
}

export default App;
