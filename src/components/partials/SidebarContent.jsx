import cls from "../../scss/partials/_sidebarcontent.module.scss";
import { AiOutlineMan, AiOutlineSetting, AiOutlineWoman } from "react-icons/ai";
import { MdToys } from "react-icons/md";
import { CustomLink } from "../elements/CustomLink";
import { SidebarCategory } from "../elements/SidebarCategory";
import { useDispatch } from "react-redux";
import { sideBarDropCategory } from "../../store/slices/app_slices/appSlice";

const SidebarContent = () => {
    const dispatch = useDispatch();

    const setCategory = (text) => {
        dispatch(sideBarDropCategory(text));
    };

    return (
        <div className={cls.content}>
            <div className={cls.content_wrapper}>
                <ul>
                    <CustomLink onClick={() => setCategory("main")} to={"/"}>
                        <AiOutlineSetting />
                        CUSTOM
                    </CustomLink>
                    <CustomLink
                        onClick={() => setCategory("Woman")}
                        to={"/Woman"}
                    >
                        <AiOutlineWoman />
                        WOMAN
                    </CustomLink>
                    <SidebarCategory index={"Woman"} />
                    <CustomLink onClick={() => setCategory("Man")} to={"/Man"}>
                        <AiOutlineMan />
                        MAN
                    </CustomLink>
                    <SidebarCategory index={"Man"} />
                    <CustomLink onClick={() => setCategory("Kid")} to={"/Kid"}>
                        <MdToys />
                        KID
                    </CustomLink>
                    <SidebarCategory index={"Kid"} />
                </ul>
            </div>
        </div>
    );
};

export { SidebarContent };
