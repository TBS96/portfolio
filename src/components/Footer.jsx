import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-slate-950/10 backdrop-blur-sm py-4 mt-10'>
      <div className='max-w-[2580px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>

        <p className='text-sm'>
          &copy; {new Date().getFullYear()} <Link to='https://github.com/TBS96/portfolio' target='_blank' className='hover:underline hover:underline-offset-8 transition-all'>Prantik Ghosh</Link> | All Rights Reserved.
        </p>

        <ul className='flex space-x-6 mt-4 md:mt-0'>
          <li>
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'underline underline-offset-8 transition-all' : 'hover:underline hover:underline-offset-8 transition-all'}`} title='Home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/skills' className={({ isActive }) => `${isActive ? 'underline underline-offset-8 transition-all' : 'hover:underline hover:underline-offset-8 transition-all'}`} title='Skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/projects' className={({ isActive }) => `${isActive ? 'underline underline-offset-8 transition-all' : 'hover:underline hover:underline-offset-8 transition-all'}`} title='Projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'underline underline-offset-8 transition-all' : 'hover:underline hover:underline-offset-8 transition-all'}`} title='Contact'>Contact</NavLink>
          </li>
        </ul>

        <div className='flex space-x-4 mt-4 md:mt-0'>
          <Link to='https://github.com/tbs96' className='btn btn-circle btn-sm btn-primary' target='_blank' title='GitHub'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link to='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='LinkedIn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
          <Link to='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-sm btn-primary' target='_blank' title='prantik.g1996@gmail.com'>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path></svg>
          </Link>
          <Link to='https://x.com/9theblacksheep6' className='btn btn-circle btn-sm btn-primary' target='_blank' title='X'>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"></path></svg>
          </Link>
          <Link to='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='Facebook'>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"></path></svg>
          </Link>
          <Link to='https://wa.me/918910325359' className='btn btn-circle btn-sm btn-primary' target='_blank' title='WhatsApp'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
              <path d="M20.52 3.48A11.946 11.946 0 0 0 12 0a11.953 11.953 0 0 0-8.485 3.515A11.949 11.949 0 0 0 0 12c0 2.134.56 4.235 1.617 6.078L0 24l6.078-1.617A11.946 11.946 0 0 0 12 24a11.953 11.953 0 0 0 8.485-3.515A11.949 11.949 0 0 0 24 12a11.953 11.953 0 0 0-3.515-8.485zM12 21.5a9.507 9.507 0 0 1-5.071-1.464l-.364-.221-3.609.961.961-3.609-.221-.364A9.506 9.506 0 0 1 2.5 12a9.5 9.5 0 1 1 9.5 9.5zm4.232-7.086c-.232-.116-1.367-.676-1.58-.752s-.366-.116-.52.116-.596.752-.732.91c-.132.15-.268.17-.5.058a7.845 7.845 0 0 1-3.864-3.383c-.292-.5.292-.464.832-1.545.088-.177.044-.326-.022-.453-.066-.126-.52-1.253-.712-1.715-.186-.448-.374-.459-.52-.467s-.292-.008-.448-.008a.866.866 0 0 0-.624.29c-.216.235-.824.808-.824 1.967s.844 2.28.96 2.437 1.66 2.573 4.022 3.607c.56.242.996.387 1.34.496.56.178 1.07.152 1.474.093.448-.067 1.367-.559 1.56-1.1.194-.541.194-1.004.136-1.1s-.208-.165-.44-.281z" />
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer