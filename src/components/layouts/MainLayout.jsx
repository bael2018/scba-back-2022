import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getCategoryApi } from "../../store/slices/api_slices/categoryApiSlice";
import { getProductApi } from "../../store/slices/api_slices/productApiSlice";
import { SidebarHeader } from "../elements/SidebarHeader";
import { Confirm } from "../partials/Confirm";
import { CustomModal } from "../partials/custom/CustomModal";

const MainLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryApi());
        dispatch(getProductApi());
    }, []);

    return (
        <>
            <Confirm />
            <CustomModal />
            <SidebarHeader />
            <Outlet />
        </>
    );
};

export { MainLayout };
