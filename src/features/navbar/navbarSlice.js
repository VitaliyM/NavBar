import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMenu: ' ',
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setOpenMenu: (state) => {
            state.openMenu = !state.openMenu
        },
    }
})


export const { setOpenMenu } = navbarSlice.actions;
export default navbarSlice.reducer;