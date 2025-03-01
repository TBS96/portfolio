import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='min-h-screen relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 pb-10 bg-blue-900/30 text-white shadow-2xs hover:shadow-2xl transition'>
            
            <div className='space-y-5 text-center md:text-left max-w-lg'>
                <p className='text-slate-700 text-xl font-semibold mt-4 md:mt-0'>Hi, I'm Prantik Ghosh</p>
                <h1 className='text-4xl md:text-5xl font-bold'>I'm a <span className='text-red-500'>Front-end Web Developer</span></h1>
                <p className="text-slate-300 dark:text-slate-700">Willing to work as a <span className='font-bold'>full-time / freelance</span> developer.</p>

                <a href='https://drive.usercontent.google.com/u/0/uc?id=1C6Q56cu_sRJy-o2p3b9Lktn_tKb93fva&export=download' className='inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600/20 focus:bg-red-700/40 text-white font-semibold rounded-lg shadow-lg shadow-red-400 hover:shadow-red-500 focus:shadow-red-600 transition outline' download>Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>

                <div className='flex justify-between md:justify-around space-x-4 mt-4'>
                    <Link to='https://github.com/tbs96' className='btn btn-outline btn-circle' target='_blank' title='GitHub'>
                        <svg className="text-gray-800 hover:text-gray-300 opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"></path></svg>
                        </Link>
                        <Link to='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-outline btn-circle' target='_blank' title='LinkedIn'>
                        <svg className="text-blue-500 opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"></path><path d="M7.2 8.809H4V19.5h3.2V8.809Z"></path></svg>
                        </Link>
                        <Link to='mailto:prantik.g1996@gmail.com' className='btn btn-outline btn-circle' target='_blank' title='prantik.g1996@gmail.com'>
                        <svg className="text-orange-500 opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path></svg>
                        </Link>
                        <Link to='https://x.com/9theblacksheep6' className='btn btn-outline btn-circle' target='_blank' title='X'>
                        <svg className="text-black hover:text-white opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"></path></svg>
                        </Link>
                        <Link to='https://www.facebook.com/theblacksheep96/' className='btn btn-outline btn-circle' target='_blank' title='Facebook'>
                        <svg className="text-blue-600 opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"></path></svg>
                        </Link>
                        <Link to='https://wa.me/918910325359' className='btn btn-outline btn-circle hover:btn-success' target='_blank' title='WhatsApp'>
                        <svg className='text-green-600 opacity-70 hover:opacity-100' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
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
// import { Link } from 'react-router-dom'

// const Hero = () => {
//     return (
//         <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 py-16 bg-blue-800/60 text-white">

//             {/* Left Content */}
//             <div className="space-y-5 text-center md:text-left max-w-lg">
//                 <p className="text-gray-400 text-xl">Hi, I'm Prantik Ghosh</p>
//                 <h1 className="text-3xl md:text-5xl font-bold">
//                     I am a <span className="text-red-500">Front-end Web Developer</span>
//                 </h1>
//                 <p className="text-gray-400">
//                     Willing to work as a <span className="font-bold">full-time / freelance</span> developer.
//                 </p>

//                 <a href='https://drive.usercontent.google.com/u/0/uc?id=1C6Q56cu_sRJy-o2p3b9Lktn_tKb93fva&export=download'
//                     className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600/80 focus:bg-red-700/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500 transition"
//                     download
//                     target='_blank'>
//                     Download Resume
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
//                     </svg>
//                 </a>
//             </div>

//             {/* Right Content - Profile Image */}
//             <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex justify-center">
//                 {/* Background Overlay */}
//                 <div className="absolute w-full h-full bg-red-500/50 rounded-full -z-10 -translate-x-5 translate-y-5 md:-translate-x-8 md:translate-y-8"></div>

//                 {/* Profile Image */}
//                 <img src='/profile.svg' alt="Prantik Ghosh" className="w-full h-full object-cover rounded-full shadow-xl" />
//             </div>

//         </section>
//     )
// }

// export default Hero