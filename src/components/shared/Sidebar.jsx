import { MasterLogo } from "../elements/ui/MasterLogo"
import { SidebarContent } from "../partials/SidebarContent"
import cls from '../../scss/_sidebar.module.scss';
import { useSelector } from "react-redux";

const SideBar = () => {     
    const { sideBarView } = useSelector(state => state.app)

    return (
        <div className={sideBarView ? `${cls.sidebar} ${cls.sidebar_active}` : cls.sidebar}>
            <MasterLogo/>
            <SidebarContent/>
        </div>
    )
}

export { SideBar }