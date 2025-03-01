import React from 'react'

const AboutMe = () => {
    return (
        <section className='py-16 px-6 md:px-20 text-white font-medium my-5 shadow-2xs hover:shadow-2xl transition glass'>

            <div className='max-w-5xl mx-auto text-center'>

                <h2 className='text-4xl font-bold text-red-500 mb-4'>About Me</h2>

                <p className='text-lg text-gray-300 leading-relaxed'>
                    I'm a<span className='text-red-400 font-semibold'> passionate</span>
                    <span className='text-red-400 font-semibold'> Frontend Web Developer</span> dedicated to crafting
                    beautiful and responsive web experiences. I specialize in modern technologies like
                    <span className='text-red-500 font-bold'> React.js, Tailwind CSS, and JavaScript</span>.
                </p>

                <p className='text-lg text-gray-300 leading-relaxed mt-4'>
                    I love solving problems, <span className='text-red-400 font-bold'>writing clean code</span>, and always learning new technologies.
                    Currently, I'm focused on building dynamic, user-friendly applications that provide
                    seamless user experiences.
                </p>

            </div>

        </section>
    )
}

export default AboutMe