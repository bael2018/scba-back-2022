import { method, rootApiNamesSlice, rootStatusNames } from "../../../constants"
import { apiThunk } from "../../../utilities/apiThunk"
import { createSlice } from "@reduxjs/toolkit"
import { setRejected } from "../../../utilities/apiErrorHandler"

export const getCategoryApi = apiThunk(
    method.get,
    'categories',
    rootApiNamesSlice.CATEGORY_API,
    'getCategoryApi'
)

export const postCategoryApi = apiThunk(
    method.post,
    'categories',
    rootApiNamesSlice.CATEGORY_API,
    'postCategoryApi'
)

const initialState = {
    categories: [],
    status: null,
    error: null
}

const categoryApiSlice = createSlice({
    name: rootApiNamesSlice.CATEGORY_API,
    initialState,
    extraReducers: {
        [getCategoryApi.pending]: state => {
            state.status = rootStatusNames.LOADING;
        },
        [getCategoryApi.fulfilled]: (state , action) => {
            state.status = rootStatusNames.RESOLVED;
            state.categories = action.payload
        },
        [getCategoryApi.rejected]: setRejected
    }
})

export default categoryApiSlice.reducer