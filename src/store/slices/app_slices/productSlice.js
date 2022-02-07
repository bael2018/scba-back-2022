import { createSlice } from "@reduxjs/toolkit";
import { rootNamesSlice } from ".";

const initState = {
    title: '',
    category: '',
    subCategory: '',
    price: '',
    discountprice: '',
    size: '',
    color: '',
    createdAt: '',
    description: '',
    images: [],
}

const productSlice = createSlice({
    name: rootNamesSlice.PRODUCT,
    initialState: initState,
    reducers: {

    }
})

export const {
    
} = productSlice.actions
export default productSlice.reducer