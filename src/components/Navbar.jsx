import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='p-4 bg-gray-300 dark:bg-gray-800'>
            <div className='flex justify-between'>
                <Link to='/' className='text-lg font-bold'>Home</Link>
                <Link to='/projects' className='ml-4'>Projects</Link>
                <Link to='/contact' className='ml-4'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar