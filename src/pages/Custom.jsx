import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CustomCategories } from "../components/partials/custom/CustomCategories";
import { CustomContent } from "../components/partials/custom/CustomContent";
import { CustomInfo } from "../components/partials/custom/CustomInfo";
import cls from '../scss/_custom.module.scss'
import { postProductApi } from "../store/slices/api_slices/productApiSlice";
import { getDate } from "../utilities/getDate";
import { setValueCleaner } from "../store/slices/app_slices/productSlice";
import { setCategory } from "../store/slices/app_slices/appSlice";

const Custom = () => {
    const {
        title, description, size, price, color,
        discountPrice, mainImage, secondImage, thirdImage
    } = useSelector(state => state.product)
    const { category , subCategory } = useSelector(state => state.app)
    const dispatch = useDispatch()

    const productHandler = () => {
        const images = [mainImage , secondImage , thirdImage]

        if(title && description && price && mainImage !== ''){
            const body = {
                title,
                description,
                size,
                color,
                discountPrice,
                mainImage,
                images,
                category,
                subCategory,
                productCode: '',
                createdAt: getDate()
            }

            dispatch(postProductApi(body))
            dispatch(setValueCleaner())
            dispatch(setCategory({ category: 'Man' }))
        }
    }

    return (
        <div className={cls.custom}>
            <div className={cls.settings}>
                <CustomCategories/>
                <CustomInfo/>
                <CustomContent/>
            </div>
            <div className={cls.custom__handler}>
                <button onClick={productHandler}>CONFIRM</button>
            </div>
        </div>
    )
}

export { Custom }