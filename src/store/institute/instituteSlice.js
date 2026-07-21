import { createSlice } from "@reduxjs/toolkit";

const instituteSlice = createSlice({
    name: "institute",
    initialState: {
        currentInstitute: null,
    },
    reducers: {
        setInstitute(state, action) {
            state.currentInstitute = action.payload;
        },
    },
});

export const { setInstitute } = instituteSlice.actions;

export default instituteSlice.reducer;