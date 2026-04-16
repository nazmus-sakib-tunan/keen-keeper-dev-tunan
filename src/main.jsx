import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Stats from './components/Homepage/Stats';
import Timeline from './components/Homepage/Timeline';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage/>

        },
        {
          path: '/timeline',
          element:<Timeline/>
        },
        {
          path: '/stats',
          element:<Stats/>
        }
      ],
      errorElement:<NotFoundPage/>
    }

  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)
