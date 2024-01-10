import App from "../app";
import { Events } from "../pages/events";
import { Login } from "../pages/login";
import { MyProile } from "../pages/my-profile";
import { Profiles } from "../pages/profiles";
import { RemoteOffice } from "../pages/remote-office";
import { Skill } from "../pages/skill";
import { WishCard } from "../pages/wish-card";
import { WorkingDevices } from "../pages/working-devices";
import { WorkingSkills } from "../pages/working-skills";
import { Layout } from "../widgets/layout";

export const routes = [
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
        element: <Layout><WorkingSkills /></Layout>,

    },
    {
        path: "working-skills/:userId",
        element: <Layout><Skill /></Layout>
    },
    {
        path: '/working-devices',
        element: <Layout><WorkingDevices /></Layout>
    },
    {
        path: '/my-profile',
        element: <Layout><MyProile /></Layout>
    },
    {
        path: '/login',
        element: <Login />
    }
]