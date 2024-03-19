import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import Checklist from "./pages/Checklist"
import AccountInformation from "./pages/AccountInformation"
import SettingsLeyout from "./layouts/SettingsLayout"
import ChangePassword from "./pages/ChangePassword"
import GlobalTasks from "./pages/GlobalTasks"
import ProfileLayout from "./layouts/ProfileLayout"
import ProfileChecklists from "./pages/ProfileChecklists"
import ProfileTasks from "./pages/ProfileTasks"
import ProfileComments from "./pages/ProfileComments"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: "/global-tasks",
            element: <GlobalTasks />
        },
        {
            path: "/checkList/:id",
            element: <Checklist />
        },
        {
            path: "profile/:username",
            element: <ProfileLayout />
        },
        {
            path: "/settings",
            element: <SettingsLeyout />,
            children: [
                {
                    index: true,
                    element: <AccountInformation />
                },
                {
                    path: "change-password",
                    element: <ChangePassword />
                }
            ]
        },
        {
            path: "/profile/:username",
            element: <ProfileLayout />,
            children: [
                {
                    index: true,
                    element: <ProfileChecklists />
                },
                {
                    path: "tasks",
                    element: <ProfileTasks />
                },
                {
                    path: "comments",
                    element: <ProfileComments />
                }
            ]
        }
        ]
    }

])

export default router