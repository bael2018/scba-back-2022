import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DOT_JSON, rootApiNamesSlice, rootStatusNames } from "../../../constants";
import { catchResponseError, setRejected } from '../../../utilities/apiErrorHandler'
import axios from "axios";

export const getCodeApi = createAsyncThunk(
    `${rootApiNamesSlice.PRODUCT_CODE}/getCodeApi`,
    async (_ , { rejectWithValue }) => {
        try {   
            const response = await axios.get(`${process.env.REACT_APP_BASE_API}productCodes${DOT_JSON}`)
            catchResponseError(response)
            return await response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postCodeApi = createAsyncThunk(
    `${rootApiNamesSlice.PRODUCT_CODE}/postCodeApi`,
    async (body , { rejectWithValue }) => {
        try {   
            const response = await axios.post(`${process.env.REACT_APP_BASE_API}productCodes${DOT_JSON}` , body)
            catchResponseError(response)
            return await response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    codes: [],
    status: null,
    error: null
}

const codeApiSlice = createSlice({
    name: rootApiNamesSlice.PRODUCT_CODE,
    initialState: initialState,
    extraReducers: {
        [getCodeApi.pending]: state => {
            state.status = rootStatusNames.LOADING;
        },
        [getCodeApi.fulfilled]: (state , action) => {
            state.status = rootStatusNames.RESOLVED;
            state.codes = action.payload;
        },
        [getCodeApi.rejected]: setRejected ,
        [postCodeApi.rejected]: setRejected
    }
})

export default codeApiSlice.reducer