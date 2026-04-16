import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <h2>home</h2>

        },
        {
          path: '/timeline',
          element: <h2>hello im timeline</h2> 
        },
        {
          path: '/stats',
          element: <h2>hello im stats</h2>
        }
      ],
      errorElement: <h2>404 not found</h2>
    }

  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)
