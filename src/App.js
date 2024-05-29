import React from 'react';

import Main from './features/home/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Info from './features/home/Info';
import Tech from './features/home/Tech';
import RootLayout from './features/ui/RootLayout';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: '/info',
          element: <Info />
        },
        {
          path: '/tech',
          element: <Tech />
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
