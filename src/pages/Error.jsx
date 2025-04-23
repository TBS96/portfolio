import React, { useEffect } from 'react'
import { Error as ErrorPage } from '../components/index'

const Error = () => {

    useEffect(() => {
        document.title = 'Prantik Ghosh | 404';
    }, []);
    

    return (
        <>
            <ErrorPage />
        </>
    )
}

export default Error