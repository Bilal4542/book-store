import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box space-y-4">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
   <div className="">
    <span>Email</span>
    <br />
    <input type="email" placeholder='Enter Your Email' className='px-3 py-2 outline-none border rounded-md mt-1 w-80' />
   </div>
   <div className="">
    <span>Password</span>
    <br />
    <input type="password" placeholder='Enter Your Password' className='px-3 py-2 outline-none border rounded-md mt-1 w-80' />
   </div>
   <div className="flex justify-around items-center mt-6">
    <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200 text-white cursor-pointer'>Login</button>
    <p>Don't have an account? <Link to={'/signup'} className='underline text-blue-500 cursor-pointer'  onClick={() => document.getElementById("my_modal_3").close()}>Signup</Link></p>
   </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
