import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            name: 'My Portfolio',
            thumbnail: 'https://i.ibb.co/5WX9JRdP/portfolio.png',
            linkURL: 'https://prantikghosh.vercel.app/',
            description: 'My personal portfolio website to showcase my projects and skills.',
            techStack: 'React, Vite, TailwindCSS, DaisyUI, PWA'
        },
        {
            name: 'neuroAI (wip)',
            thumbnail: 'https://i.ibb.co/Vp2xnZhq/neuroAI.png',
            linkURL: 'https://neuro-ai-client.vercel.app/',
            description: 'An AI-based web application for mental health. It uses AI to analyze user\'s mental health and provide insights.',
            techStack: 'React, Vite, Redux-Toolkit, TailwindCSS, DaisyUI, Appwrite'
        },
        {
            name: 'Blogify',
            thumbnail: 'https://i.ibb.co/WN1LFd4k/blogify.png',
            linkURL: 'https://blogify-tbs96.vercel.app/',
            description: 'A blogging platform to create and share blogs.',
            techStack: 'React, Vite, Redux-Toolkit, TailwindCSS, DaisyUI, Appwrite'
        },
        {
            name: 'Manage Todos',
            thumbnail: 'https://i.ibb.co/r2gXbvtV/manage-Todos.png',
            linkURL: 'https://tbs96.github.io/manageTodos/',
            description: 'A simple to-do list manager, with localStorage and contextAPI, having search and filter features.',
            techStack: 'React, Vite, TailwindCSS'
        },
        {
            name: 'Manage Todos with Redux Toolkit',
            thumbnail: 'https://i.ibb.co/NndWLSyT/manage-Todos-RTK.png',
            linkURL: 'https://tbs96.github.io/manageTodosRTK/',
            description: 'Todo manager with Redux Toolkit for state management.',
            techStack: 'React, Vite, Redux-Toolkit, TailwindCSS'
        },
        {
            name: 'Currency Converter',
            thumbnail: 'https://i.ibb.co/1Gp8gbWs/currency-Converter.png',
            linkURL: 'https://tbs96.github.io/currencyConverterReact/',
            description: 'Fetches real-time currency exchange rates and converts them.',
            techStack: 'React, Vite, TailwindCSS'
        },
        {
            name: 'Password Strength Checker',
            thumbnail: 'https://i.ibb.co/ZzPp2nJ5/pass-Gen-strength-Checker.png',
            linkURL: 'https://tbs96.github.io/random-password-generator-strength-checker/',
            description: 'A password generator with strength checker.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Mini E-commerce',
            thumbnail: 'https://i.ibb.co/5PPwzZM/mini-ecommerce.png',
            linkURL: 'https://tbs96.github.io/mini-ecommerce/',
            description: 'A mini e-commerce website layout with add to cart system using localStorage.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Typing Speed Test',
            thumbnail: 'https://i.ibb.co/zHVP9B8P/typing-speed-test.png',
            linkURL: 'https://tbs96.github.io/typing-speed-test/',
            description: 'A typing speed test application with WPM calculation.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Typewriter Effect',
            thumbnail: 'https://i.ibb.co/tMPYX2fF/typewriter-Effect.png',
            linkURL: 'https://tbs96.github.io/typewriter-effect/',
            description: 'A typewriter effect application with text change feature.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Recipe Finder',
            thumbnail: 'https://i.ibb.co/pv67z2yB/recipe-finder.png',
            linkURL: 'https://tbs96.github.io/recipe-finder-app/',
            description: 'A recipe finder application using fetchAPI.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'BMI Calculator',
            thumbnail: 'https://i.ibb.co/G3NzqwLh/bmi-calculator.png',
            linkURL: 'https://tbs96.github.io/bmi-calculator/',
            description: 'A BMI calculator application with categories.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Manual Image Slider',
            thumbnail: 'https://i.ibb.co/ccbtpn5f/image-slider.png',
            linkURL: 'https://tbs96.github.io/image-slider/',
            description: 'A manual image slider with next and previous buttons.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Restaurant Tip Calculator',
            thumbnail: 'https://i.ibb.co/RTw1t5SS/restaurant-tip-calculator.png',
            linkURL: 'https://tbs96.github.io/restaurant-tip-calculator/',
            description: 'A restaurant tip calculator with tip percentage.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Random Password Generator',
            thumbnail: 'https://i.ibb.co/tMgzNBP8/random-password-generator.png',
            linkURL: 'https://tbs96.github.io/random-password-generator/',
            description: 'A random password generator with input length feature.',
            techStack: 'HTML, CSS, JavaScript, Bootstrap'
        },
        {
            name: 'Gool Gool Weather',
            thumbnail: 'https://i.ibb.co/zVmV1tFY/weather-app.png',
            linkURL: 'https://tbs96.github.io/weather-app/',
            description: 'A weather application with real-time weather data, using fetchAPI.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Dynamic Todo List',
            thumbnail: 'https://i.ibb.co/gxrJxWP/dynamic-todo-list.png',
            linkURL: 'https://tbs96.github.io/dynamic-to-do-list/',
            description: 'A dynamic to-do list with add, delete and select-all features.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Image to Text Converter',
            thumbnail: 'https://i.ibb.co/cK6BZ6sW/img-to-text-converter.png',
            linkURL: 'https://tbs96.github.io/img-to-text-converter-app/',
            description: 'An image to text converter using Tesseract.js.',
            techStack: 'HTML, CSS, JavaScript, Tesseract.js'
        },
        {
            name: 'Mindful Breathing Timer',
            thumbnail: 'https://i.ibb.co/8n72T0Mh/mindful-breathing-timer.png',
            linkURL: 'https://tbs96.github.io/mindful-breathing-timer/',
            description: 'A mindful breathing timer with start-stop feature.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Random Color Code Generator',
            thumbnail: 'https://i.ibb.co/bMF8GshQ/rgb-color-Code-generator.png',
            linkURL: 'https://tbs96.github.io/random-rgb-color-generator/',
            description: 'A random color code generator with copy to clipboard feature.',
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            name: 'E-commerce Website (Layout)',
            thumbnail: 'https://i.ibb.co/WvRSYLRy/ecommerce-layout.png',
            linkURL: 'https://tbs96.github.io/bootstrap-project-1/',
            description: 'A simple e-commerce website layout.',
            techStack: 'HTML, CSS, Bootstrap'
        },
        {
            name: 'Smart-Coders (Layout)',
            thumbnail: 'https://i.ibb.co/ds0kGwj9/smart-coders-layout.png',
            linkURL: 'https://tbs96.github.io/tailwindcss-project-1-dist/',
            description: 'A simple layout for a coding class website.',
            techStack: 'HTML, CSS, TailwindCSS'
        },
    ];

    const handleProjectClick = (index) => {
        setActiveProject(activeProject === index ? null : index);
    };

    return (
        <section className='py-16 shadow-2xs hover:shadow-2xl transition glass rounded-sm'>
            <div className='container mx-auto px-5'>
                <h2 className='text-4xl font-bold text-center text-error mb-5'>Projects</h2>
                <p className='text-info font-semibold text-center mb-10 animate-pulse'>
                    Click each of <span className='text-fuchsia-500'>{projects.length}</span> projects to visit!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                    {projects.map(({ name, thumbnail, linkURL, description, techStack }, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(index)}
                            className='relative flex flex-col items-center gap-2 p-4 rounded-xl shadow-2xl hover:shadow-base-300 transition size-full overflow-hidden glass cursor-pointer'
                        >
                            <div className={`flex flex-col items-center transition duration-300 ${activeProject === index ? 'blur-md opacity-30' : ''}`}>
                                <img src={thumbnail} alt={name} className='w-full h-48 rounded-xl hover:shadow-inner' />
                                <p className='text-lg font-semibold'>{name}</p>
                            </div>

                            {activeProject === index && (
                                <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/70 rounded-xl text-white'>
                                    <h3 className='text-xl font-bold text-error'>{name}</h3>
                                    <p className='text-sm text-gray-300'>{description}</p>
                                    <p className='text-sm text-fuchsia-400'><strong>Tech-Stack: </strong><code>{techStack}</code></p>

                                    <Link to={linkURL} target='_blank' className='btn btn-wide btn-soft mt-2 flex items-center gap-2 text-lg font-bold text-success hover:text-white transition'>
                                        Visit
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
