import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import routers from './Routers/Router.tsx';
import { store } from './app/store.ts';
import './styles/global.css';
import './styles/variable.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <RouterProvider
        router={routers}
      />
    </Provider>
  </React.StrictMode>,
)
