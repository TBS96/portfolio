import { Facebook, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { MdWhatsapp } from 'react-icons/md'
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
            <Github size={22} />
          </Link>
          <Link to='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='LinkedIn'>
            <Linkedin size={22} />
          </Link>
          <Link to='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-sm btn-primary' target='_blank' title='prantik.g1996@gmail.com'>
            <Mail size={22} />
          </Link>
          <Link to='https://x.com/9theblacksheep6' className='btn btn-circle btn-sm btn-primary' target='_blank' title='X'>
            <BsTwitterX size={22} />
          </Link>
          <Link to='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='Facebook'>
            <Facebook size={22} />
          </Link>
          <Link to='https://wa.me/918910325359' className='btn btn-circle btn-sm btn-primary' target='_blank' title='WhatsApp'>
            <MdWhatsapp size={22} />
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer