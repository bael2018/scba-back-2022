import { createSlice } from "@reduxjs/toolkit";
import { rootNamesSlice } from "../../../constants";

const initState = {
    title: '',
    price: '',
    discountprice: '',
    size: '',
    color: '',
    description: '',
    mainImage: '',
    secondImage: '',
    thirdImage: '',
    valueCleaner: false
}

const productSlice = createSlice({
    name: rootNamesSlice.PRODUCT,
    initialState: initState,
    reducers: {
        setProductInfo: (state , action) => {
            state.title = action.payload.title;
            state.price = action.payload.price;
            state.discountprice = action.payload.discountprice;
            state.size = action.payload.size;
            state.color = action.payload.color;
            state.description = action.payload.description;
        },
        setProductImages: (state , action) => {
            state.mainImage = action.payload.mainImage
            state.secondImage = action.payload.secondImage
            state.thirdImage = action.payload.thirdImage
        },
        setValueCleaner: state => {
            state.valueCleaner = !state.valueCleaner
        }
    }
})

export const {
    setValueCleaner,
    setProductInfo,
    setProductImages
} = productSlice.actions
export default productSlice.reducer