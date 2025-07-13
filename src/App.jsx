import React from 'react'
import { Link } from 'react-router'

const App = () => {
  return (
    <div className='p-5 container mx-auto'>
      <nav className='py-28 mt-16 bg-slate-50'>
        <ul className='flex items-center justify-center space-x-4'>
          <li><Link to="/register" className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Register</Link></li>
          <li><Link to="/login" className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Login</Link></li>
          
        </ul>
      </nav>
    </div>
  )
}

export default App