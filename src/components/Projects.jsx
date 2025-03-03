import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {

    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            name: 'neuroAI (wip)',
            thumbnail: 'https://i.ibb.co/3QYnWF8/neuroAI.png',
            linkURL: 'https://neuro-ai-client.vercel.app/'
        },
        {
            name: 'Blogify',
            thumbnail: 'https://i.ibb.co/WN1LFd4k/blogify.png',
            linkURL: 'https://blogify-tbs96.vercel.app/'
        },
        {
            name: 'Manage Todos',
            thumbnail: 'https://i.ibb.co/r2gXbvtV/manage-Todos.png',
            linkURL: 'https://tbs96.github.io/manageTodos/'
        },
        {
            name: 'Manage Todos with Redux Toolkit',
            thumbnail: 'https://i.ibb.co/NndWLSyT/manage-Todos-RTK.png',
            linkURL: 'https://tbs96.github.io/manageTodosRTK/'
        },
    ];

    const handleProjectClick = (index) => {
        setActiveProject(activeProject === index ? null : index);
    };

    return (

        <section className='py-16 text-white shadow-2xs hover:shadow-2xl transition glass rounded-sm'>
            <div className='container mx-auto px-5'>

                <h2 className='text-4xl font-bold text-center text-error mb-5'>Projects</h2>
                <p className='text-info font-semibold text-center mb-10 animate-pulse'>Click each of <span className='text-fuchsia-500'>{projects.length}</span> projects to visit!</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                    {projects.map(({ name, thumbnail, linkURL }, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(index)}
                            className='relative flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/80 hover:bg-gray-700 shadow-lg hover:shadow-2xl transition size-full overflow-hidden glass cursor-pointer'>

                            <div className={`flex flex-col items-center transition duration-300 ${activeProject === index ? 'blur-md opacity-30' : ''}`}>
                                <img src={thumbnail} alt={name} className='w-full h-48 rounded-xl hover:shadow-inner' />
                                <p className='text-lg font-semibold'>{name}</p>
                            </div>

                            {activeProject === index && (
                                <div className='absolute inset-0 flex justify-center items-center text-xl font-bold text-white'>

                                    <span className='text-error'>{name}</span>
                                    <Link to={linkURL} target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-success transition">
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