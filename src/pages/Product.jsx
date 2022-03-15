import {
    setDeleteProductSuccess,
    setIsActive,
} from "../store/slices/app_slices/productSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { intoArray } from "../utilities/intoArray";
import cls from "../scss/_product.module.scss";
import { rootStatusNames } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsEdit, setItemBody } from "../store/slices/app_slices/appSlice";

const Product = () => {
    const { dropDownCategoryLink } = useSelector((state) => state.product);
    const { products, status } = useSelector((state) => state.productApi);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const filteredArray = intoArray(products)?.filter(
            ({ subCategory, category }) =>
                category === id && subCategory === dropDownCategoryLink
        );
        setData(filteredArray);
    }, [dropDownCategoryLink]);

    const deleteHandler = (id) => {
        dispatch(setIsActive());
        dispatch(setDeleteProductSuccess({ id }));
    };

    const editHandler = (item) => {
        dispatch(setIsEdit());
        dispatch(setItemBody({ body: item }));
    };

    if (status === rootStatusNames.LOADING) {
        return <h3>Loading</h3>;
    } else {
        return (
            <div className={cls.product}>
                <h4 className={cls.product__header}>{dropDownCategoryLink}</h4>
                <div className={cls.product__body}>
                    {data.length ? (
                        data.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={cls.product__body_wrapper}
                                >
                                    <img
                                        src={item.mainImage}
                                        alt="productImage"
                                    />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <span>
                                            <button
                                                onClick={() =>
                                                    deleteHandler(item.id)
                                                }
                                            >
                                                <AiFillDelete />
                                            </button>
                                            <button
                                                onClick={editHandler.bind(
                                                    null,
                                                    item
                                                )}
                                            >
                                                <AiFillEdit />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h3>Empty category</h3>
                    )}
                </div>
            </div>
        );
    }
};

export { Product };
