import React from 'react';
import "./home.css";
const Home = () => {
  return (
   <div className='home d-flex justify-content-center align-items-center'>
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center'>
            <b>Organise Your<br/> Work and Life</b>
        </h1>
        <p>Become focused and productive with <br/> todo app. Your task manager friend.</p>
        <button className='home-btn p-2'>Make Todo List</button>
    </div>
   
   
   </div>
  )
}

export default Home