import { createAsyncThunk } from "@reduxjs/toolkit"
import { DOT_JSON, rootApiNamesSlice } from "../../../constants"
import { catchResponseError } from '../../../utilities/apiErrorHandler'
import axios from "axios"

export const postProductSubCategoryApi = createAsyncThunk(
   `${rootApiNamesSlice.POST_CATEGORY}/postProductSubCategoryApi`,
    async (body , { rejectWithValue }) => {
        try {
            const response = axios.post(`${process.env.REACT_APP_BASE_API}categories${DOT_JSON}` , body)
            catchResponseError(response)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
) 