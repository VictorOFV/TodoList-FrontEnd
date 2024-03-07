import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import Checklist from "./pages/Checklist"
import Settings from "./pages/Settings"

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
            element: <Settings />
        }
        ]
    }

])

export default router