import React, { useEffect } from 'react'
import { Contact as ContactPage } from '../components'

const Contact = () => {

    useEffect(() => {
        document.title = 'Prantik Ghosh | Contact';
    }, []);

    return (
        <>
            <ContactPage />
        </>
    )
}

export default Contact