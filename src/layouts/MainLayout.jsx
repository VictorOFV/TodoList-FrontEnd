import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/Auth"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MainLayout() {
    return (
        <div>
            <AuthProvider>
                <div style={{ display: "flex", flexDirection: "column", height: "100vh"}}>
                    <Header />
                    <div style={{ flex: "1", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Outlet/>
                    </div>
                    <Footer />
                </div>
            </AuthProvider>
        </div>
    )
}

export default MainLayout