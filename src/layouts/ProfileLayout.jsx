import { Outlet } from "react-router-dom"
import Profile from "../components/Profile"

function ProfileLayout() {
    return (
        <main>
            <Profile />
            <Outlet />
        </main>
    )
}

export default ProfileLayout