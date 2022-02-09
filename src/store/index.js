
import { configureStore } from '@reduxjs/toolkit';
import productApiReducer from './slices/api_slices/productApiSlice'
import appReducer from './slices/app_slices/appSlice'
import productReducer from './slices/app_slices/productSlice'
import codesReducer from './slices/api_slices/codesApiSlice'

export const store = configureStore({
    reducer: {
        productApi: productApiReducer,
        app: appReducer,
        product: productReducer,
        code: codesReducer
    }
}) 