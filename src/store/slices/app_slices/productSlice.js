import { createSlice } from "@reduxjs/toolkit";
import { rootNamesSlice } from "../../../constants";

const initState = {
    title: "",
    price: "",
    discountPrice: "",
    size: "",
    color: "",
    description: "",
    mainImage: "",
    secondImage: "",
    thirdImage: "",
    valueCleaner: false,
    dropDownView: false,
    dropDownCategoryLink: "",
    isConfirmModal: false,
    deleteProductId: "",
};

const productSlice = createSlice({
    name: rootNamesSlice.PRODUCT,
    initialState: initState,
    reducers: {
        setProductInfo: (state, action) => {
            state.title = action.payload.title;
            state.price = action.payload.price;
            state.discountPrice = action.payload.discountPrice;
            state.size = action.payload.size;
            state.color = action.payload.color;
            state.description = action.payload.description;
        },
        setProductImages: (state, action) => {
            state.mainImage = action.payload.mainImage;
            state.secondImage = action.payload.secondImage;
            state.thirdImage = action.payload.thirdImage;
        },
        setValueCleaner: (state) => {
            state.valueCleaner = !state.valueCleaner;
        },
        setDropDownViewSuccess: (state) => {
            state.dropDownView = true;
        },
        setDropDownViewFailure: (state) => {
            state.dropDownView = false;
        },
        setDropDownLink: (state, action) => {
            state.dropDownCategoryLink = action.payload;
        },
        setIsActive: (state) => {
            state.isConfirmModal = !state.isConfirmModal;
        },
        setDeleteProductSuccess: (state, action) => {
            state.deleteProductId = action.payload.id;
        },
    },
});

export const {
    setDeleteProductSuccess,
    setIsActive,
    setDropDownLink,
    setDropDownViewSuccess,
    setDropDownViewFailure,
    setValueCleaner,
    setProductInfo,
    setProductImages,
} = productSlice.actions;
export default productSlice.reducer;
