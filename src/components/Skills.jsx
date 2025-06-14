import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Skills = () => {

    const [activeSkill, setActiveSkill] = useState(null);

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/skills.json');
                const data = await response.json();
                setSkills(data);

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
            catch (err) {
                console.error(`Error in fetching skills: ${err}`);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        fetchData();
    }, []);

    if (loading) return (
        <div className='flex justify-center items-center h-screen'>
            <div className='loading loading-infinity size-16'></div>
        </div>
    )

    const handleSkillClick = (index) => {
        setActiveSkill(activeSkill === index ? null : index);
        // console.log(activeSkill);   // 1st click=null, 2nd click=index
    };

    return (
        <section className='py-16 bg-gray-900/30 shadow-2xs hover:shadow-2xl transition rounded-sm'>
            <div className='container mx-auto px-5'>

                <h2 className='text-4xl font-bold text-center text-error mb-5' data-aos='fade-up'>Skills / Tech Stack</h2>
                <p className='text-info font-semibold text-center mb-10 animate-pulse' data-aos='fade-down'>Click each of <span className='text-warning'>{skills.length}</span> tech-stacks to read DOCS!</p>

                {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center'> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center'>
                    {skills.map(({ id, name, icon, linkURL }) => {
                        const aosAnimations = ['fade-up', 'fade-down', 'fade-right', 'fade-up-right', 'zoom-in-right',];
                        const aos = aosAnimations[id % aosAnimations.length];
                        return (
                            <div key={id} data-aos={aos} data-aos-duration={1100}>
                                <div
                                    onClick={() => handleSkillClick(id)}
                                    className='relative flex flex-col items-center gap-2 p-4 card shadow-lg hover:shadow-2xl w-full h-36 overflow-hidden glass cursor-pointer hover:-translate-y-1 transition-all duration-300'>

                                    <div className={`flex flex-col items-center transition duration-300 ${activeSkill === id ? 'blur-md opacity-30' : ''}`}>
                                        <img src={icon} alt={name} className='size-20 object-contain' />
                                        <p className='text-lg font-semibold'>{name}</p>
                                    </div>

                                    {activeSkill === id && (
                                        <div className='absolute inset-0 flex justify-center items-center text-xl font-bold'>
                                            <Link to={linkURL} target='_blank'>
                                                Visit: <span className='text-error'>{linkURL.replace(linkURL, name)}</span>
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

export default Skills