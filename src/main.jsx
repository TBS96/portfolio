import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { lazy } from 'react'
import Aos from 'aos'

Aos.init();

const Home = lazy(() => import('./pages/Home.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Error = lazy(() => import('./pages/Error.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        // path: '/',
        index: true,  // recommended for "Home", when using nested routes
        element: <Home />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
document.addEventListener('copy', (e) => {
  e.clipboardData.setData('text/plain', 'Copying is strictly prohibited on this website');
  e.preventDefault();
})