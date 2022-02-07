import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBarView: false,
    sidebarCategory: 'first',
    category: '',
    subCategory: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        sideBarAppear: state => {
            state.sideBarView = !state.sideBarView
        },
        sideBarDropCategory: (state , action) => {
            state.sidebarCategory = action.payload
        },
        setCategory: (state , action) => {
            state.category = action.payload.category
        },
        setSubCategory: (state , action) => {
            state.subCategory = action.payload.subCategory
        }
    }
})

export const { 
    sideBarAppear,
    sideBarDropCategory,
    setCategory,
    setSubCategory
} = appSlice.actions
export default appSlice.reducer