import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Skills = () => {

    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            linkURL: 'https://www.w3schools.com/html/'
        },
        {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            linkURL: 'https://www.w3schools.com/css/'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            linkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'JSON',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg',
            linkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON'
        },
        {
            name: 'React.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            linkURL: 'https://react.dev/reference/react'
        },
        {
            name: 'Vite',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
            linkURL: 'https://vite.dev/'
        },
        {
            name: 'Redux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
            linkURL: 'https://redux-toolkit.js.org/introduction/getting-started'
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            linkURL: 'https://tailwindcss.com/docs/installation/using-vite'
        },
        {
            name: 'Material UI',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
            linkURL: 'https://mui.com/material-ui/getting-started/'
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            linkURL: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
        },
        {
            name: 'Firebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            linkURL: 'https://firebase.google.com/docs/auth?_gl=1*lrtmgh*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goN-nFN9bqVqiajGOM1qCp-AgTZ_0Bd0AAVSzt-IkrtayG3uf_M8j9xoCli4QAvD_BwE&gclsrc=aw.ds'
        },
        {
            name: 'appwrite',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg',
            linkURL: 'https://appwrite.io/docs'
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            linkURL: 'https://git-scm.com/'
        },
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            linkURL: 'https://github.com/tbs96'
        },
        {
            name: 'GitHub Codespaces',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg',
            linkURL: 'https://github.com/features/codespaces'
        },
        {
            name: 'GitLab',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
            linkURL: 'https://gitlab.com/TBS96'
        },
        {
            name: 'Markdown',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg',
            linkURL: 'https://www.markdownguide.org/getting-started/'
        },
        {
            name: 'Vercel',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
            linkURL: 'https://vercel.com/prantik-ghoshs-projects'
        },
        {
            name: 'Netlify',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
            linkURL: 'https://app.netlify.com/teams/prantikg96/sites'
        },
        {
            name: 'npm',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
            linkURL: 'https://www.npmjs.com/'
        },
        {
            name: 'VS Code',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
            linkURL: 'https://code.visualstudio.com/'
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            linkURL: 'https://nodejs.org/docs/latest/api/'
        },
        {
            name: 'Nodemon',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg',
            linkURL: 'https://nodemon.io/'
        },
        {
            name: 'Express.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
            linkURL: 'https://expressjs.com/'
        },
        {
            name: 'Linux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
            linkURL: 'https://www.linuxmint.com/'
        },
    ];

    const handleSkillClick = (index) => {
        setActiveSkill(activeSkill === index ? null : index);
        // console.log(activeSkill);   // 1st click=null, 2nd click=index
    };

    return (
        <section className='py-16 bg-gray-900/30 shadow-2xs hover:shadow-2xl transition'>
            <div className='container mx-auto px-5'>

                <h2 className='text-4xl font-bold text-center text-error mb-5'>Skills / Tech Stack</h2>
                <p className='text-info font-semibold text-center mb-10 animate-pulse'>Click each of <span className='text-warning'>{skills.length}</span> tech-stacks to read DOCS!</p>

                {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center'> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center'>
                    {skills.map(({ name, icon, linkURL }, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleSkillClick(index)} 
                            className='relative flex flex-col items-center gap-2 p-4 card shadow-lg hover:shadow-2xl transition w-full h-36 overflow-hidden glass cursor-pointer'>

                            <div className={`flex flex-col items-center transition duration-300 ${activeSkill === index ? 'blur-md opacity-30' : ''}`}>
                                <img src={icon} alt={name} className='size-20 object-contain' />
                                <p className='text-lg font-semibold'>{name}</p>
                            </div>

                            {activeSkill === index && (
                                <div className='absolute inset-0 flex justify-center items-center text-xl font-bold'>
                                    <Link to={linkURL} target='_blank'>
                                        Visit: <span className='text-error'>{linkURL.replace(linkURL, name)}</span>
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