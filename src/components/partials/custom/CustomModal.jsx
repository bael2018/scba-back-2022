import { useSelector } from "react-redux";
import cls from "../../../scss/partials/custom/_customodal.module.scss";

const CustomModal = () => {
    const { isEdit, itemBody } = useSelector((state) => state.app);

    return (
        <div className={`${cls.modal} ${isEdit && cls.modal_active}`}>
            <div className={cls.modal_wrapper}></div>
        </div>
    );
};

export { CustomModal };
