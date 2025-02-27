import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menubar, setMenubar] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Projects',
            slug: '/projects',
            active: true
        },
        {
            name: 'Contact',
            slug: '/contact',
            active: true
        },
    ];

    return (
        <header className='w-full bg-gray-900/10 backdrop-blur-sm text-white shadow-black/30 shadow-2xl sticky top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
                {/* Logo */}
                <h1 className='text-2xl font-bold'>
                    <Link to='/'>Prantik Ghosh</Link>
                </h1>

                {/* Desktop navigation */}
                <ul className='hidden md:flex space-x-6'>
                    {
                        navItems.map(({ name, slug }) => (
                            <li key={slug}>
                                <NavLink to={slug} className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:text-white hover:bg-indigo-600'}`}>
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* Mobile Menu btn */}
                <button
                    className='md:hidden focus:outline-none cursor-pointer'
                    onClick={() => setMenubar(!menubar)}
                    aria-expanded={menubar}
                    aria-label='Toggle Menu'
                >
                    <svg
                        className="w-8 h-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menubar ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile dropdown btn */}
            <ul className={`md:hidden bg-gray-900/10 backdrop-blur-3xl transition-all duration-300 ${menubar ? 'block' : 'hidden'}`}>
                {
                    navItems.map(({ name, slug }) => (
                        <li key={slug}>
                            <NavLink to={slug} className={({ isActive }) => `block px-4 py-2 my-2 text-center rounded-lg transition ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700 focus:bg-gray-900'}`} onClick={() => setMenubar(false)}>
                                {name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Navbar