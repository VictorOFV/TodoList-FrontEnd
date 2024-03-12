import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import Checklist from "./pages/Checklist"
import AccountInformation from "./pages/AccountInformation"
import SettingsLeyout from "./layouts/SettingsLayout"
import ChangePassword from "./pages/ChangePassword"

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
            path: "/checkList/:id",
            element: <Checklist />
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
        }
        ]
    }

])

export default router