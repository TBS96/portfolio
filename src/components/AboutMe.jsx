import React from 'react'

const AboutMe = () => {
    return (
        <section className='py-16 px-6 md:px-20 font-medium my-5 shadow-2xs hover:shadow-2xl transition glass'>

            <div className='max-w-5xl mx-auto bg-gray-800/10 p-6 rounded-lg shadow-lg mb-6'>

                <h3 className='text-4xl font-bold text-center text-red-500 mb-6' data-aos='fade-up'>Profile Summary</h3>

                <ul className='list-disc list-inside space-y-2 text-lg'>
                    <li className=' transition' data-aos='fade-up' data-aos-delay='700' data-aos-duration={1000}>
                        Aspiring Front-End Developer with expertise in <span className='font-bold text-info'>React.js, Tailwind CSS, and Bootstrap</span>.
                    </li>
                    <li className=' transition' data-aos='fade-up' data-aos-delay='600' data-aos-duration={1000}>
                        Engineered <span className='font-bold text-success'>responsive & pixel-perfect</span> web interfaces for seamless multi-device performance.
                    </li>
                    <li className=' transition' data-aos='fade-up' data-aos-delay='500' data-aos-duration={1000}>
                        Optimized web performance, improving <span className='font-bold text-primary'>load times & user engagement</span>.
                    </li>
                    <li className=' transition' data-aos='fade-up' data-aos-delay='400' data-aos-duration={1000}>
                        Translated <span className='font-bold text-error'>complex design concepts</span> into functional, high-performance applications.
                    </li>
                    <li className=' transition' data-aos='fade-up' data-aos-delay='300' data-aos-duration={1000}>
                        Passionate about <span className='font-bold text-warning'>innovation, adaptability, and contributing</span> to scalable front-end solutions.
                    </li>
                </ul>

            </div>


            <div className='max-w-5xl mx-auto text-center bg-gray-800/10 p-6 rounded-lg shadow-lg'>

                <h2 className='text-4xl font-bold text-red-500 mb-6' data-aos='fade-up'>About Me</h2>

                <div className='max-w-3xl mx-auto mt-6'>
                    <p className='text-lg leading-relaxed' data-aos='fade-up' data-aos-delay='700' data-aos-duration={1000}>
                        I'm a <span className='text-red-400 font-semibold'>passionate</span>
                        <span className='text-red-400 font-semibold'> Frontend Web Developer</span> dedicated to crafting
                        beautiful and responsive web experiences. I specialize in modern technologies like
                        <span className='text-red-500 font-bold'> React.js, Tailwind CSS, and JavaScript</span>.
                    </p>

                    <p className='text-lg leading-relaxed mt-4' data-aos='fade-up' data-aos-delay='700' data-aos-duration={1000}>
                        I love solving problems, <span className='text-red-400 font-bold'>writing clean code</span>, and always learning new technologies.
                        Currently, I'm focused on building dynamic, user-friendly applications that provide
                        seamless user experiences.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default AboutMe