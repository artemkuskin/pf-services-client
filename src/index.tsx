import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Layout } from './features/layout/ui';
import { Profiles } from './pages/profiles/ui';
import { RemoteOffice } from './pages/remote-office/ui';
import { WishCard } from './pages/wish-card/ui';
import { WorkingSkills } from './pages/working-skills/ui';
import { Events } from './pages/events/ui';
import { WorkingDevices } from './pages/working-devices/ui';
import { MyProile } from './pages/my-profile/ui';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = [
  {
    path: "/",
    element: <Layout>
      <App />
    </Layout>,
  },
  {
    path: '/events',
    element: <Layout><Events /></Layout>
  },
  {
    path: '/profiles',
    element:
      <Layout><Profiles /></Layout>
  },
  {
    path: '/remote-office',
    element: <Layout><RemoteOffice /></Layout>
  },
  {
    path: '/wish-card',
    element: <Layout><WishCard /></Layout>
  },
  {
    path: '/working-skills',
    element: <Layout><WorkingSkills /></Layout>
  },
  {
    path: '/working-devices',
    element: <Layout><WorkingDevices /></Layout>
  },
  {
    path: '/my-profile',
    element: <Layout><MyProile /></Layout>
  },
]

const router = createBrowserRouter(routes)

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

