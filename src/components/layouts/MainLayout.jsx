import { Outlet } from "react-router-dom"
import { SidebaerHeader } from "../elements/SidebarHeader"

const MainLayout = () => {
    return (
        <>
            <SidebaerHeader/>
            <Outlet/>
        </>
    )
}

export { MainLayout }