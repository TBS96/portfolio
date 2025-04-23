import React, { useEffect } from 'react'
import { Skills as SkillsComponent } from '../components'

const Skills = () => {

    useEffect(() => {
        document.title = 'Pranitk Ghosh | Skills';
    }, []);

    return (
        <>
            <SkillsComponent />
        </>
    )
}

export default Skills