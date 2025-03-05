import React, { useEffect, useState } from 'react'
import { Container, Footer, Navbar } from './components'
import { Outlet } from 'react-router-dom'
import { LifeLine } from 'react-loading-indicators';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return !loading ? (
    <div className='min-h-screen bg-gradient-to-br from-red-300 to-blue-500'>
      <Navbar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  ) : (
    <div className='grid place-content-center w-full min-h-screen'>
      <LifeLine easing='ease-in' speedPlus={2} text='Welcome to my Portfolio' size='large' />
    </div>
  )
}

export default App