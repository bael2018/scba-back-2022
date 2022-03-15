import { createSlice } from "@reduxjs/toolkit";
import { rootNamesSlice } from "../../../constants";

const initialState = {
    sideBarView: false,
    sidebarCategory: "first",
    category: "Man",
    subCategory: "",
    status: "Default",
    itemBody: "",
    isEdit: false,
};

const appSlice = createSlice({
    name: rootNamesSlice.APP,
    initialState: initialState,
    reducers: {
        sideBarAppear: (state) => {
            state.sideBarView = !state.sideBarView;
        },
        sideBarDropCategory: (state, action) => {
            state.sidebarCategory = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload.category;
        },
        setSubCategory: (state, action) => {
            state.subCategory = action.payload.subCategory;
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setItemBody: (state, action) => {
            state.itemBody = action.payload.body;
        },
        setIsEdit: (state) => {
            state.isEdit = !state.isEdit;
        },
    },
});

export const {
    setIsEdit,
    setItemBody,
    setStatus,
    sideBarAppear,
    sideBarDropCategory,
    setCategory,
    setSubCategory,
} = appSlice.actions;
export default appSlice.reducer;
