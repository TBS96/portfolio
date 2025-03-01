import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Home, Projects } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // path: '/',
        index: true,  // recommended for "Home", when using nested routes
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
