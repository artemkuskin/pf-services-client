import App from "../app";
import { Events } from "../pages/events/ui";
import { MyProile } from "../pages/my-profile/ui";
import { Profiles } from "../pages/profiles/ui";
import { RemoteOffice } from "../pages/remote-office/ui";
import { WishCard } from "../pages/wish-card/ui";
import { WorkingDevices } from "../pages/working-devices/ui";
import { WorkingSkills } from "../pages/working-skills/ui";
import { Layout } from "../widgets/layout/ui";

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