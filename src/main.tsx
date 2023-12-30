import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Meditation from './routes/Meditation';
import Home from './routes/home';
import { RecordHistory } from './routes/History';

import './index.css';
import { AccountInfo } from './routes/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/app',
        element: <Meditation />
      },
      {
        path: '/history',
        element: <RecordHistory />
      },
      {
        path: '/account',
        element: <AccountInfo />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
