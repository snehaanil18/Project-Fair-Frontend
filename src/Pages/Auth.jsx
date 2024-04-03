import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="p-5 col-lg-6">
          <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-638053,resizemode-75,msid-84146083/prime/technology-and-startups/booting-up-developer-economy-how-tech-startups-are-helping-coders-build-and-test-software-faster.jpg" width={'100%'} alt="" />
        </div>
        <div className="px-5 col-lg-6">
          <form style={{height:'440px'}} className='shadow text-dark bg-secondary'>
            <h2 className='text-center p-3  mt-5'>Project Fair</h2>
            <h4 className='text-center'>
            {
              register? 'Register Here' : 'Login Here'
            }
            </h4>
            <div className='mx-5 px-5 mt-5 pb-4'>
              {
                register &&
                <input type="text" placeholder='username' className='form-control mt-3' />
              }
              <input type="text" placeholder='email' className='form-control mt-3' />
              <input type="text" placeholder='password' className='form-control mt-3' />
            </div>
            {
              register?
              <div className="text-center">
                <button className='m-3 btn btn-dark'>Register</button>
                <p>Already Registered? <Link className='text-dark' to={'/login'}>Login here...</Link></p>
              </div>
              :
              <div className="text-center">
              <button className='m-3 btn btn-dark'>Login</button>
              <p className='mt-3'>New to here? <Link className='text-dark' to={'/register'}>Register here...</Link></p>
            </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth