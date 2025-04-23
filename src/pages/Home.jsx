import React, { useEffect } from 'react'
import { AboutMe, Hero } from '../components'

const Home = () => {

    useEffect(() => {
        document.title = 'Prantik Ghosh | Home';
    }, []);

    return (
        <>
            <Hero />
            <AboutMe />
        </>
    )
}

export default Home