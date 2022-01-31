
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/api_slices/productSlice'
import appReducer from './slices/app_slices/appSlice'

export const store = configureStore({
    reducer: {
        // API-REDUCERS
        product: productReducer,

        // APP-REDUCERS
        app: appReducer
    }
}) 