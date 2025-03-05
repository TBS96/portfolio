import React, { useEffect } from 'react'
import { Projects as ProjectsPage } from '../components'

const Projects = () => {

    useEffect(() => {
        document.title = 'Prantik Ghosh | Projects';
    }, []);

    return (
        <>
            <ProjectsPage />
        </>
    )
}

export default Projects