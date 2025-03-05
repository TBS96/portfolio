import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const themes = ['light', 'dark', 'retro', 'cyberpunk', 'valentine', 'aqua'];

const Navbar = () => {

    const [menubar, setMenubar] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const navItems = [
        {
            name: 'Home',
            slug: '/'
        },
        {
            name: 'Skills',
            slug: '/skills'
        },
        {
            name: 'Projects',
            slug: '/projects'
        },
        {
            name: 'Contact',
            slug: '/contact'
        },
    ];

    return (
        <header className='w-full bg-gray-900/10 backdrop-blur-sm shadow-black/30 shadow-2xl sticky top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
                {/* Logo */}
                <h1 className='text-2xl font-bold'>
                    <Link to='/'>Prantik Ghosh</Link>
                </h1>

                {/* Theme Dropdown (Mobile & Tablet) */}
                <div className='dropdown md:hidden'>
                    <div tabIndex={0} role='button' className='btn m-1'>
                        Theme
                        <svg
                            width='12px'
                            height='12px'
                            className='inline-block h-2 w-2 fill-current opacity-60'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                        >
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className='dropdown-content bg-base-300 rounded-box w-52 p-2 shadow-2xl'>
                        {themes.map((t) => (
                            <li key={t}>
                                <input
                                    type='radio'
                                    name='theme-dropdown'
                                    className='theme-controller w-full btn btn-sm btn-ghost justify-start'
                                    aria-label={t.charAt(0).toUpperCase() + t.slice(1)}
                                    value={t}
                                    checked={theme === t}
                                    onChange={() => setTheme(t)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex space-x-6'>
                    {navItems.map(({ name, slug }) => (
                        <li key={slug}>
                            <NavLink
                                to={slug}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg transition ${isActive ? 'bg-indigo-600 text-white' : 'hover:text-white hover:bg-indigo-600'}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop Theme Dropdown (Right Side) */}
                <div className='dropdown hidden md:block'>
                    <div tabIndex={0} role='button' className='btn m-1'>
                        Theme
                        <svg
                            width='12px'
                            height='12px'
                            className='inline-block h-2 w-2 fill-current opacity-60'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                        >
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className='dropdown-content bg-base-300 rounded-box w-52 p-2 shadow-2xl'>
                        {themes.map((t) => (
                            <li key={t}>
                                <input
                                    type='radio'
                                    name='theme-dropdown'
                                    className='theme-controller w-full btn btn-sm btn-ghost justify-start'
                                    aria-label={t.charAt(0).toUpperCase() + t.slice(1)}
                                    value={t}
                                    checked={theme === t}
                                    onChange={() => setTheme(t)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden focus:outline-none cursor-pointer'
                    onClick={() => setMenubar(!menubar)}
                    aria-expanded={menubar}
                    aria-label='Toggle Menu'
                >
                    <svg
                        className='w-8 h-8 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        {menubar ? (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        ) : (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Dropdown */}
            <ul className={`md:hidden bg-gray-900/10 backdrop-blur-3xl transition-all duration-300 ${menubar ? 'block' : 'hidden'}`}>
                {navItems.map(({ name, slug }) => (
                    <li key={slug}>
                        <NavLink
                            to={slug}
                            className={({ isActive }) =>
                                `block px-4 py-2 my-2 text-center rounded-lg transition ${isActive ? 'bg-indigo-600 text-white' : 'hover:text-white hover:bg-indigo-600'
                                }`
                            }
                            onClick={() => setMenubar(false)}
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Navbar













// Old Navbar:

// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {

//     const [menubar, setMenubar] = useState(false);

//     const navItems = [
//         {
//             name: 'Home',
//             slug: '/',
//             active: true
//         },
//         {
//             name: 'Skills',
//             slug: '/skills',
//             active: true
//         },
//         {
//             name: 'Projects',
//             slug: '/projects',
//             active: true
//         },
//         {
//             name: 'Contact',
//             slug: '/contact',
//             active: true
//         },
//     ];

//     return (
//         <header className='w-full bg-gray-900/10 backdrop-blur-sm text-white shadow-black/30 shadow-2xl sticky top-0 z-50'>
//             <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
//                 {/* Logo */}
//                 <h1 className='text-2xl font-bold'>
//                     <Link to='/'>Prantik Ghosh</Link>
//                 </h1>

//                 {/* Desktop navigation */}
//                 <ul className='hidden md:flex space-x-6'>
//                     {
//                         navItems.map(({ name, slug }) => (
//                             <li key={slug}>
//                                 <NavLink to={slug} className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:text-white hover:bg-indigo-600'}`}>
//                                     {name}
//                                 </NavLink>
//                             </li>
//                         ))
//                     }
//                 </ul>

//                 {/* Mobile Menu btn */}
//                 <button
//                     className='md:hidden focus:outline-none cursor-pointer'
//                     onClick={() => setMenubar(!menubar)}
//                     aria-expanded={menubar}
//                     aria-label='Toggle Menu'
//                 >
//                     <svg
//                         className="w-8 h-8 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         {menubar ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                         )}
//                     </svg>
//                 </button>
//             </nav>

//             {/* Mobile dropdown btn */}
//             <ul className={`md:hidden bg-gray-900/10 backdrop-blur-3xl transition-all duration-300 ${menubar ? 'block' : 'hidden'}`}>
//                 {
//                     navItems.map(({ name, slug }) => (
//                         <li key={slug}>
//                             <NavLink to={slug} className={({ isActive }) => `block px-4 py-2 my-2 text-center rounded-lg transition ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700 focus:bg-gray-900'}`} onClick={() => setMenubar(false)}>
//                                 {name}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </header>
//     )
// }

// export default Navbar