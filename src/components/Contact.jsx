import React from 'react'
import { Facebook, Github, Linkedin } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';
import { MdWhatsapp } from 'react-icons/md';

const Contact = () => {

  const contactDetails = [
    {
      id: 1,
      label: 'Email',
      value: 'prantik.fdev@gmail.com',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-primary'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      link: 'mailto:prantik.fdev@gmail.com',
    },
    {
      id: 2,
      label: 'Phone',
      value: '+91-8910325359',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-primary'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      link: 'tel:+91-8910325359',
    },
    {
      id: 3,
      label: 'Location',
      value: 'Kolkata, India',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-primary'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      link: 'https://maps.app.goo.gl/KFC77jmj5NotX2vA9',
    },
    {
      id: 4,
      label: '',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-8 text-primary'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
          />
        </svg>
      ),
      value: [
        {
          id: 1,
          name: 'GitHub',
          url: 'https://github.com/TBS96',
          icon: (
            <Github size={22} />
          )
        },
        {
          id: 2,
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/prantikghosh96/',
          icon: (
            <Linkedin size={22} />
          )
        },
        {
          id: 3,
          name: 'WhatsApp',
          url: 'https://wa.me/918910325359',
          icon: (
            <MdWhatsapp size={22} />
          )
        },
        {
          id: 4,
          name: 'X',
          url: 'https://x.com/9theblacksheep6',
          icon: (
            <BsTwitterX size={22} />
          )
        },
        {
          id: 5,
          name: 'Facebook',
          url: 'https://www.linkedin.com/in/prantikghosh96/',
          icon: (
            <Facebook size={22} />
          )
        },
      ],
    },
  ];

  return (
    <section className='min-h-screen p-4 flex items-center justify-center'>
      <div className='card w-full max-w-2xl bg-base-100/30 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
        <div className='card-body'>
          <h2 className='text-3xl font-bold text-center mb-6 text-info/70 animate-bounce'>
            Let's Connect!
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {contactDetails.map(({ icon, label, link, value, id }) => {
              const aosAnimations = ['zoom-in-right', 'fade-up-right', 'fade-right', 'fade-down', 'fade-up'];
              const aos = aosAnimations[id % aosAnimations.length];
              return (
                <div
                  key={id}
                  data-aos={aos}
                  data-aos-duration={1100}
                  className='w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-base-300 transition-all duration-300 glass'>
                  {icon}
                  <div>
                    <h3 className='font-semibold'>{label}</h3>
                    {label !== '' ? (
                      <a href={link} target='_blank' className='link link-primary'>
                        {value}
                      </a>
                    ) : (
                      <div className='flex gap-2'>
                        {value.map(({ id, icon, name, url }) => {
                          const aosAnimations = ['zoom-in-right', 'fade-up-right', 'fade-right', 'fade-down', 'fade-up'];
                          const aos = aosAnimations[id % aosAnimations.length];
                          return (
                            <a
                              key={id}
                              href={url}
                              data-aos={aos}
                              data-aos-duration={1500}
                              title={name}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn btn-circle btn-sm btn-primary'
                            >
                              {icon}
                            </a>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact