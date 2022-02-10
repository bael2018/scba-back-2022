import { createSlice } from "@reduxjs/toolkit";
import { rootNamesSlice } from "../../../constants";

const initialState = {
    sideBarView: false,
    sidebarCategory: 'first',
    category: 'Man',
    subCategory: '',
}

const appSlice = createSlice({
    name: rootNamesSlice.APP,
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