import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                setProjects(data);

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
            catch (err) {
                console.error(`Error in fetching projects: ${err}`);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='loading loading-infinity size-16'></div>
            </div>
        )
    }

    const handleProjectClick = (index) => {
        setActiveProject(activeProject === index ? null : index);
    };

    return (
        <section className='py-16 shadow-2xs hover:shadow-2xl transition glass rounded-sm'>
            <div className='container mx-auto px-5'>
                <h2 className='text-4xl font-bold text-center text-error mb-5' data-aos='fade-up'>Projects</h2>
                <p className='text-info font-semibold text-center mb-10 animate-pulse' data-aos='fade-down'>
                    Click each of <span className='text-fuchsia-500'>{projects.length}</span> projects to visit!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                    {projects.map(({ name, thumbnail, linkURL, description, techStack, id }) => {
                        const aosAnimations = ['zoom-in-right', 'fade-up-right', 'fade-right', 'fade-down', 'fade-up'];
                        const aos = aosAnimations[id % aosAnimations.length];
                        return (
                            <div key={id} data-aos={aos} data-aos-duration={1100}>
                                <div 
                                    onClick={() => handleProjectClick(id)}
                                    className='relative flex flex-col items-center gap-2 p-4 rounded-xl shadow-2xl hover:shadow-base-300 size-full overflow-hidden glass cursor-pointer hover:-translate-y-1 transition-all duration-300'
                                >
                                    <div className={`flex flex-col items-center transition duration-300 ${activeProject === id ? 'blur-md opacity-30' : ''}`}>
                                        <img src={thumbnail} alt={name} loading='lazy' className='w-full h-48 rounded-xl hover:shadow-inner' />
                                        <p className='text-lg font-semibold'>{name}</p>
                                    </div>

                                    {activeProject === id && (
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
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects