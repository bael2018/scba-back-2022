import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import { getCategoryApi } from "../../store/slices/api_slices/categoryApiSlice"
import { SidebarHeader } from "../elements/SidebarHeader"

const MainLayout = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCategoryApi())
    } , [])

    return (
        <>
            <SidebarHeader/>
            <Outlet/>
        </>
    )
}

export { MainLayout }