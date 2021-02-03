import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 20,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count++;
        },
        decrease: (state) => {
            state.count--;
        },
    },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
