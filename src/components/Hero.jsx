import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <section className='min-h-screen relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 pb-10 bg-blue-900/30 shadow-2xs hover:shadow-2xl transition'>

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
                <h1 className='text-2xl md:text-4xl font-bold'>I'm a <h2 className='text-red-500'>
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
                </h2>Developer</h1>
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

                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn btn-block px-6 py-5 text-lg bg-red-500 hover:bg-red-600/20 focus:bg-red-700/40 shadow-lg shadow-red-400 hover:shadow-red-500 focus:shadow-red-600 transition outline">Resume
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
                    <ul tabIndex={0} className="dropdown-content menu bg-base-300/90 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <a href='https://drive.usercontent.google.com/u/0/uc?id=1C6Q56cu_sRJy-o2p3b9Lktn_tKb93fva&export=download' target='_blank' download className='text-lg'>Download
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://drive.google.com/file/d/1C6Q56cu_sRJy-o2p3b9Lktn_tKb93fva/view' target='_blank' className='text-lg'>View
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-spin">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                    <Link to='https://github.com/tbs96' className='btn btn-circle btn-soft btn-primary' target='_blank' title='GitHub'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                    <Link to='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-square btn-soft btn-primary' target='_blank' title='LinkedIn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Link>
                    <Link to='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-soft btn-primary' target='_blank' title='prantik.g1996@gmail.com'>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path></svg>
                    </Link>
                    <Link to='https://x.com/9theblacksheep6' className='btn btn-square btn-soft btn-primary' target='_blank' title='X'>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"></path></svg>
                    </Link>
                    <Link to='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-soft btn-primary' target='_blank' title='Facebook'>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"></path></svg>
                    </Link>
                    <Link to='https://wa.me/918910325359' className='btn btn-square btn-soft btn-primary' target='_blank' title='WhatsApp'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                            <path d="M20.52 3.48A11.946 11.946 0 0 0 12 0a11.953 11.953 0 0 0-8.485 3.515A11.949 11.949 0 0 0 0 12c0 2.134.56 4.235 1.617 6.078L0 24l6.078-1.617A11.946 11.946 0 0 0 12 24a11.953 11.953 0 0 0 8.485-3.515A11.949 11.949 0 0 0 24 12a11.953 11.953 0 0 0-3.515-8.485zM12 21.5a9.507 9.507 0 0 1-5.071-1.464l-.364-.221-3.609.961.961-3.609-.221-.364A9.506 9.506 0 0 1 2.5 12a9.5 9.5 0 1 1 9.5 9.5zm4.232-7.086c-.232-.116-1.367-.676-1.58-.752s-.366-.116-.52.116-.596.752-.732.91c-.132.15-.268.17-.5.058a7.845 7.845 0 0 1-3.864-3.383c-.292-.5.292-.464.832-1.545.088-.177.044-.326-.022-.453-.066-.126-.52-1.253-.712-1.715-.186-.448-.374-.459-.52-.467s-.292-.008-.448-.008a.866.866 0 0 0-.624.29c-.216.235-.824.808-.824 1.967s.844 2.28.96 2.437 1.66 2.573 4.022 3.607c.56.242.996.387 1.34.496.56.178 1.07.152 1.474.093.448-.067 1.367-.559 1.56-1.1.194-.541.194-1.004.136-1.1s-.208-.165-.44-.281z" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className='relative w-full md:w-[400px] mt-10 md:mt-0 flex justify-center'>
                <div className='absolute size-full bg-indigo-600/60 rounded-full blur-3xl left-10 top-10 -translate-x-5 translate-y-5 md:-translate-x-8 md:translate-y-8'></div>

                <img src="/profile.svg" alt="profile" className='size-full object-cover rounded-full shadow-lg hover:shadow-2xl relative z-10' />
            </div>


        </section>
    )
}

export default Hero