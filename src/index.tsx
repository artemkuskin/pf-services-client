import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Layout } from './widgets/layout/ui';
import { Profiles } from './pages/profiles/ui';
import { RemoteOffice } from './pages/remote-office/ui';
import { WishCard } from './pages/wish-card/ui';
import { WorkingSkills } from './pages/working-skills/ui';
import { Events } from './pages/events/ui';
import { WorkingDevices } from './pages/working-devices/ui';
import { MyProile } from './pages/my-profile/ui';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const router = createBrowserRouter(routes)

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

