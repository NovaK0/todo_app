import React from 'react'

const Login = () => {
  return (
    <div className='signup'>
        <div className="container">
            <div className='row'>
            <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
                    <h1 className='text-center sign-up-heading'>
                        <b>Sign <br/>In</b>
                    </h1>
                </div>
                <div className='col-lg-8 column  d-flex justify-content-center align-items-center'>
                    <div className='d-flex flex-column w-100 p-5'>
                        <input 
                        className='p-2 my-3 input-signup'
                        type="email"
                        name="email"
                        placeholder='Enter your email'/>




                        <input 
                        className='p-2 my-3 input-signup'
                        type="password"
                        name="password"
                        placeholder='Enter your password'/>


                        <button className='btn-signup p-2'>Login</button>




                    </div>
                    </div>
              
                
               
            </div>
        </div>
    </div>
  )
}

export default Login