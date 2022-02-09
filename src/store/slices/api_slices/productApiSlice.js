import { catchResponseError, setRejected } from '../../../utilities/apiErrorHandler'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DOT_JSON, rootApiNamesSlice, rootStatusNames } from '../../../constants';
import axios from "axios";

export const getProductApi = createAsyncThunk(
    `${rootApiNamesSlice.GET_PRODUCT}/getProductApi`,
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

export const postProductApi = createAsyncThunk(
    `${rootApiNamesSlice.POST_PRODUCT}/postProductApi`,
    async (body , { rejectWithValue }) => {
        try {
            const response = axios.post(`${process.env.REACT_APP_BASE_API}products${DOT_JSON}` , body)
            catchResponseError(response)
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
    name: rootApiNamesSlice.GET_PRODUCT,
    initialState: initState,
    extraReducers: {
        [getProductApi.pending]: state => {
            state.status = rootStatusNames.LOADING;
        },
        [getProductApi.fulfilled]: (state , action) => {
            state.products = action.payload
            state.status = rootStatusNames.RESOLVED;
        },
        [getProductApi.rejected]: setRejected,
        [postProductApi.rejected]: setRejected,
    }
})

export default getProductSlice.reducer