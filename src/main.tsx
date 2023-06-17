import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routers from './Routers/Router.tsx';
import './styles/global.css';
import './styles/variable.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={routers}
    />
  </React.StrictMode>,
)
