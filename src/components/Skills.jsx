import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Skills = () => {

    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            hoverText: 'https://www.w3schools.com/html/'
        },
        {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            hoverText: 'https://www.w3schools.com/css/'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            hoverText: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'React.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            hoverText: 'https://react.dev/reference/react'
        },
        {
            name: 'Redux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
            hoverText: 'https://redux-toolkit.js.org/introduction/getting-started'
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            hoverText: 'https://tailwindcss.com/docs/installation/using-vite'
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            hoverText: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            hoverText: 'https://git-scm.com/'
        },
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            hoverText: 'https://github.com/tbs96'
        },
    ];

    const handleSkillClick = (index) => {
        setActiveSkill(activeSkill === index ? null : index);
        console.log(activeSkill);
    };

    return (
        <section className='py-16 bg-gray-900/30 text-white shadow-2xs hover:shadow-2xl transition'>
            <div className='container mx-auto px-5'>

                <h2 className='text-4xl font-bold text-center text-error mb-5'>Skills / Tech Stack</h2>
                <p className='text-sm text-info font-semibold text-center mb-10 animate-pulse'>Click each of <span className='text-warning'>{skills.length}</span> skills to read DOCS!</p>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center'>
                    {skills.map(({ name, icon, hoverText }, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleSkillClick(index)} 
                            className='relative flex flex-col items-center gap-2 p-4 card bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-2xl transition w-full h-36 overflow-hidden glass cursor-pointer'>

                            <div className={`flex flex-col items-center transition duration-300 ${activeSkill === index ? 'blur-md opacity-30' : ''}`}>
                                <img src={icon} alt={name} className='size-20 object-contain' />
                                <p className='text-lg font-semibold'>{name}</p>
                            </div>

                            {activeSkill === index && (
                                <div className='absolute inset-0 flex justify-center items-center text-xl font-bold text-white'>
                                    <Link to={hoverText} target='_blank'>
                                        Visit: <span className='text-error'>{hoverText.replace(hoverText, name)}</span>
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

export default Skills