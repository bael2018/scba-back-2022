import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBarView: false
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        sideBarAppear: state => {
            state.sideBarView = !state.sideBarView
        }
    }
})

export const { sideBarAppear } = appSlice.actions
export default appSlice.reducer