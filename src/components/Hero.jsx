import React from 'react'
import { ArrowRight, Facebook, Github, Linkedin, Mail } from 'lucide-react'
import { MdWhatsapp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { BsTwitterX } from 'react-icons/bs'

const Hero = () => {
    return (
        <section className='min-h-screen relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 pb-10 bg-blue-900/30 shadow-2xs hover:shadow-2xl transition rounded-sm'>

            <div className='space-y-5 text-center md:text-left max-w-lg'>
                <p className='text-xl font-semibold mt-4 md:mt-0'>
                    <Typewriter
                        words={['Hi!', 'I\'m Prantik Ghosh.', 'Welcome to my digital playground...',]}
                        loop={Infinity}
                        cursor
                        cursorBlinking={true}
                        typeSpeed={130}
                        delaySpeed={1200}
                        deleteSpeed={70}
                    />
                </p>
                <h1 className='text-2xl md:text-4xl font-bold'><span data-aos-delay='700' data-aos-duration={1100}>I'm a </span> <p className='text-red-500'>
                    <Typewriter
                        words={['Front-End Web', 'React.js']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        cursorBlinking={true}
                        typeSpeed={130}
                        delaySpeed={1200}
                        deleteSpeed={70}
                    />
                </p><span data-aos-delay='700' data-aos-duration={1100}>Developer</span></h1>
                <p>Willing to work as a <span className='font-bold text-red-500'>
                    <Typewriter
                        words={['full-time', 'freelance']}
                        loop={Infinity}
                        cursor
                        cursorBlinking={true}
                        typeSpeed={130}
                        delaySpeed={1200}
                        deleteSpeed={70}
                    />
                </span> developer.</p>

                <div data-aos='fade-down' data-aos-delay='700' data-aos-duration={1100} className='mt-10'>
                    <a href="https://drive.proton.me/urls/77GCST2PR4#ITD4t8ZrTk8n" target='_blank' className='btn px-6 py-5 text-lg bg-red-500 hover:outline-dashed hover:bg-red-600/20 focus:bg-red-700/40 shadow-lg shadow-red-400 hover:shadow-red-500 focus:shadow-red-600 transition outline group' title='View | Download Resume'>
                        Resume <ArrowRight className='animate-pulse group-hover:animate-none transition-all duration-300 group-hover:translate-x-3' />
                    </a>
                </div>

                <div className='flex justify-center md:justify-start space-x-4 mt-10'>
                    <div data-aos='zoom-in-right' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='https://github.com/tbs96' className='btn btn-circle btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='GitHub'>
                        <Github />
                        </Link>
                    </div>
                    <div data-aos='fade-up-right' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-square btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='LinkedIn'>
                            <Linkedin />
                        </Link>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='prantik.fdev@gmail.com'>
                            <Mail />
                        </Link>
                    </div>
                    <div data-aos='fade-down' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='https://x.com/9theblacksheep6' className='btn btn-square btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='X'>
                            <BsTwitterX size={22} />
                        </Link>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='Facebook'>
                            <Facebook />
                        </Link>
                    </div>
                    <div data-aos='zoom-in-right' data-aos-delay='700' data-aos-duration={1500}>
                        <Link to='https://wa.me/918910325359' className='btn btn-square btn-soft btn-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-in-out' target='_blank' title='WhatsApp'>
                            <MdWhatsapp size={25} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='relative w-full md:w-[400px] mt-10 md:mt-0 flex justify-center' data-aos='zoom-in-right' data-aos-delay='700' data-aos-duration={2500}>
                <div className='absolute size-full bg-indigo-600/60 rounded-full blur-3xl left-10 top-10 -translate-x-5 translate-y-5 md:-translate-x-8 md:translate-y-8'></div>

                <img src="/profile.svg" alt="profile" className='size-full object-cover rounded-full shadow-lg hover:shadow-2xl relative z-10' />
            </div>


        </section>
    )
}

export default Hero
