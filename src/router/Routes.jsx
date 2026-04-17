import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";

import Stats from "../components/Homepage/Stats";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FriendsDetails from "../FriendDetails/FriendsDetails";


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: () => fetch('/Data.json'),

        },
        {
          path: "/:id",
          element: <FriendsDetails/>
        },
       
        {
          path: '/stats',
          element:<Stats/>
        },
        
        

      ],
      errorElement:<NotFoundPage/>
    }

  ]
)