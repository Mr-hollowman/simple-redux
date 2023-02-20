import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "firstSlice",
    initialState: {
        count: 10,
        name: "naveen"
    },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + 1
        },
        decrement: (state, aciton) => {
            state.count = state.count - 1
        },
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { decrement, changeName } = counterSlice.actions

export const increment = counterSlice.actions.increment

export default counterSlice.reducer