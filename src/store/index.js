
import { configureStore } from '@reduxjs/toolkit';
import getProductReducer from './slices/api_slices/getProductSlice'
import appReducer from './slices/app_slices/appSlice'
import productReducer from './slices/app_slices/productSlice'

export const store = configureStore({
    reducer: {
        // API-REDUCERS
        productApi: getProductReducer,

        // APP-REDUCERS
        app: appReducer,
        product: productReducer
    }
}) 