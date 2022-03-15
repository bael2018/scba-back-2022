import {
    setDeleteProductSuccess,
    setIsActive,
} from "../../store/slices/app_slices/productSlice";
import { deleteProductApi } from "../../store/slices/api_slices/productApiSlice";
import { useDispatch, useSelector } from "react-redux";
import cls from "../../scss/partials/_confirm.module.scss";

const Confirm = () => {
    const { isConfirmModal, deleteProductId } = useSelector(
        (state) => state.product
    );
    const dispatch = useDispatch();

    const handleConfirmBtn = (e) => {
        if (e) {
            const id = deleteProductId;
            dispatch(deleteProductApi(id));
            dispatch(setDeleteProductSuccess({ id: "" }));
            dispatch(setIsActive());
        } else {
            dispatch(setIsActive());
        }
    };

    return (
        <div
            className={`${cls.confirm} ${isConfirmModal && cls.confirm_active}`}
        >
            <h3>Are you sure?</h3>
            <div>
                <span onClick={() => handleConfirmBtn(true)}>Yes</span>
                <span onClick={() => handleConfirmBtn(false)}>no</span>
            </div>
        </div>
    );
};

export { Confirm };
