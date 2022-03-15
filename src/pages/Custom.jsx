import { useDispatch, useSelector } from "react-redux";
import { CustomCategories } from "../components/partials/custom/CustomCategories";
import { CustomContent } from "../components/partials/custom/CustomContent";
import { CustomInfo } from "../components/partials/custom/CustomInfo";
import cls from "../scss/_custom.module.scss";
import { setValueCleaner } from "../store/slices/app_slices/productSlice";
import { setCategory, setStatus } from "../store/slices/app_slices/appSlice";
import { productCode, getDate, trimStr, toLower } from "../utilities";
import { postProductApi } from "../store/slices/api_slices/productApiSlice";

const Custom = () => {
    const {
        title,
        description,
        size,
        price,
        color,
        discountPrice,
        mainImage,
        secondImage,
        thirdImage,
    } = useSelector((state) => state.product);
    const { category, subCategory, status } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const productHandler = () => {
        const images = [mainImage, secondImage, thirdImage];
        const bread = [
            {
                title: toLower(category),
                path: `/product/${toLower(category)}`,
                id: 2,
            },
            {
                title: toLower(subCategory),
                path: `/product/${toLower(category)}/${toLower(
                    category
                )}-${toLower(subCategory)}`,
                id: 3,
            },
            {
                title: trimStr(title),
                active: true,
                path: `/product/${toLower(category)}/${toLower(
                    category
                )}-${toLower(subCategory)}/${toLower(category)}-${toLower(
                    subCategory
                )}-${trimStr(title)}`,
                id: 4,
            },
        ];

        if (
            title !== " " &&
            description !== " " &&
            price !== " " &&
            mainImage !== " "
        ) {
            const body = {
                title,
                description,
                size,
                color,
                price,
                discountPrice,
                mainImage,
                images,
                bread,
                status,
                category,
                subCategory,
                productCode: productCode(),
                createdAt: getDate(),
            };

            dispatch(postProductApi(body));
            dispatch(setValueCleaner());
            dispatch(setCategory({ category: "Man" }));
            dispatch(setStatus({ status: "Default" }));
        }
    };

    return (
        <div className={cls.custom}>
            <div className={cls.settings}>
                <CustomCategories />
                <CustomInfo />
                <CustomContent />
            </div>
            <div className={cls.custom__handler}>
                <button onClick={productHandler}>CONFIRM</button>
            </div>
        </div>
    );
};

export { Custom };
