import { method, rootApiNamesSlice, rootStatusNames } from "../../../constants";
import { setRejected } from "../../../utilities/apiErrorHandler";
import { apiThunk } from "../../../utilities/apiThunk";
import { createSlice } from "@reduxjs/toolkit";

export const getProductApi = apiThunk(
    method.get,
    "products",
    rootApiNamesSlice.PRODUCT_API,
    "getProductApi"
);

export const postProductApi = apiThunk(
    method.post,
    "products",
    rootApiNamesSlice.PRODUCT_API,
    "postProductApi"
);

export const deleteProductApi = apiThunk(
    method.delete,
    "products",
    rootApiNamesSlice.PRODUCT_API,
    "deleteProductApi"
);

export const patchProductApi = apiThunk(
    method.patch,
    "products",
    rootApiNamesSlice.PRODUCT_API,
    "patchProductApi"
);

const initialState = {
    products: [],
    status: null,
    error: null,
};

const productApiSlice = createSlice({
    name: rootApiNamesSlice.PRODUCT_API,
    initialState,
    extraReducers: {
        [getProductApi.pending]: (state) => {
            state.status = rootStatusNames.LOADING;
        },
        [getProductApi.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.status = rootStatusNames.RESOLVED;
        },
        [getProductApi.rejected]: setRejected,
        [postProductApi.rejected]: setRejected,
        [deleteProductApi.rejected]: setRejected,
        [patchProductApi.rejected]: setRejected,
    },
});

export default productApiSlice.reducer;
