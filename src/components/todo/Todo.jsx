import React, { useState } from 'react'
import { TodoCards } from './TodoCards';
import './todo.css'
const Todo = () => {
    const [input,setinput] = useState({title:"",body:""});
    const [array,setarr] = useState([]);
    const show=()=>{
        document.getElementById("textarea").style.display="block";
    }

    const change=(e)=>{
        const {name,value} = e.target;
        setinput({...input,[name]:value});
    }

    const submit=()=>{
        setarr([...array,input]);
        setinput({title:"",body:""})
    }

  return (
    <div className='todo'>
        <div className='todo-main container d-flex justify-content-center align-items-center my-4'>
            <div className='d-flex flex-column todo-inputs-div w-50 p-2'>
                <input
                type="text"
                placeholder='Title'
                name='title'
                value={input.title}
                className='my-2 p-2 todo-inputs'
                onClick={show}
           onChange={change}
                />

                <textarea
                id='textarea'
                name='body'
                type='text'
                placeholder='Body'
                value={input.body}
                className='p-2 todo-inputs'
            onChange={change}
                />
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <button
                className='home-btn d-flex justify-content-end my-3'
                onClick={submit}>
                
                Add
                </button>
            </div>
            <div className="todo-body">
            <div className="container">
                {array && 
                array.map((item,index)=> <>
               <TodoCards
            key={index}
            title={item.title}
            description={item.body}
          />
                </>)
                
                }
            </div>
            </div>
    </div>
  )
}

export default Todo