import { catchResponseError, DOT_JSON, rootApiNamesSlice, rootStatusNames, setRejected } from ".";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductFromApi = createAsyncThunk(
    `${rootApiNamesSlice.PRODUCT_API}/getProductFromApi`,
    async (_ , { rejectWithValue }) => {
        try {
           const response = await axios.get(`${process.env.REACT_APP_BASE_API}users${DOT_JSON}`) 
           catchResponseError(response)
           return await response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initState = {
    products: [],
    status: null,
    error: null
}

const getProductSlice = createSlice({
    name: rootApiNamesSlice.PRODUCT_API,
    initialState: initState,
    extraReducers: {
        [getProductFromApi.pending]: state => {
            state.status = rootStatusNames.LOADING;
        },
        [getProductFromApi.fulfilled]: (state , action) => {
            state.products = action.payload
            state.status = rootStatusNames.RESOLVED;
        },
        [getProductFromApi.rejected]: setRejected,
    }
})

export default getProductSlice.reducer