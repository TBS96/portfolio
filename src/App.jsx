import React from 'react'
import { Container, Footer, Navbar } from './components'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-300 to-blue-500'>
      <div>
        <Navbar />
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default App