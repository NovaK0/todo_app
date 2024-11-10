import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signup from './components/signup/Signup';
import Login from './components/signup/Login';
import Todo from './components/todo/Todo';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App