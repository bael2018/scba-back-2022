import {
    setDropDownViewFailure,
    setDropDownViewSuccess,
} from "../../../store/slices/app_slices/productSlice";
import { postCategoryApi } from "../../../store/slices/api_slices/categoryApiSlice";
import cls from "../../../scss/partials/custom/_customcategories.module.scss";
import { initCategory, initStatus } from "../../../constants/init";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import { rootConstants } from "../../../constants";
import { Dropdown } from "../Dropdown";
import { useState, useEffect } from "react";
import { intoArray } from "../../../utilities/intoArray";

const CustomCategories = () => {
    const { category, subCategory, status } = useSelector((state) => state.app);
    const { dropDownView } = useSelector((state) => state.product);
    const { categories } = useSelector((state) => state.category);
    const [data, setData] = useState([]);
    const categoryFiller = useInput("");
    const categoryImageFiller = useInput("");
    const dispatch = useDispatch();

    const setEditSuccess = () => {
        dispatch(setDropDownViewSuccess());
    };

    const setEditFailure = () => {
        dispatch(setDropDownViewFailure());
    };

    const addBtnHandler = () => {
        if (
            categoryFiller.getValue() !== "" &&
            categoryImageFiller.getValue() !== ""
        ) {
            const body = {
                category,
                subCategory: categoryFiller.getValue(),
                image: categoryImageFiller.getValue(),
            };

            dispatch(postCategoryApi(body));
            categoryFiller.clearValue();
            categoryImageFiller.clearValue();
        }
    };

    useEffect(() => {
        const filteredArray = intoArray(categories)?.filter(
            (item) => item.category === category
        );
        setData(filteredArray);
    }, [category]);

    return (
        <div className={cls.settings}>
            <div className={cls.settings__wrapper}>
                <h3>Choose category !</h3>
                <Dropdown
                    data={initCategory}
                    init={rootConstants.category}
                    state={category}
                />
            </div>
            <div className={cls.settings__wrapper}>
                <h3>Choose status !</h3>
                <Dropdown
                    data={initStatus}
                    init={rootConstants.status}
                    state={status}
                />
            </div>
            <h3>
                <span
                    onClick={setEditFailure}
                    className={` ${!dropDownView && cls.settings_active}`}
                >
                    Add
                </span>{" "}
                |
                <span
                    onClick={setEditSuccess}
                    className={` ${dropDownView && cls.settings_active}`}
                >
                    Choose
                </span>
            </h3>
            {dropDownView ? (
                <div className={cls.settings__wrapper}>
                    <h3>SubCategory !</h3>
                    <Dropdown
                        data={data}
                        init={rootConstants.subCategory}
                        state={subCategory}
                    />
                </div>
            ) : (
                <>
                    <div className={cls.settings__wrapper_edit}>
                        <h3>SubCategory !</h3>
                        <input type="text" {...categoryFiller.bind()} />
                    </div>
                    <div className={cls.settings__wrapper_edit}>
                        <h3>SubCategory Image !</h3>
                        <input type="text" {...categoryImageFiller.bind()} />
                        <button onClick={addBtnHandler}>Confirm</button>
                    </div>
                </>
            )}
        </div>
    );
};

export { CustomCategories };
