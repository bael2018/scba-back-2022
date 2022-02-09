import { Outlet } from "react-router-dom"
import { SidebarHeader } from "../elements/SidebarHeader"

const MainLayout = () => {
    return (
        <>
            <SidebarHeader/>
            <Outlet/>
        </>
    )
}

export { MainLayout }