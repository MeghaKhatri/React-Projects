import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [{id:1 , task: "it's a sample task"}],
}

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        add : (state, action) => {
            const object = {
                id:Math.random(),
                task:action.payload
            }
            state.value.push(object);
        },
        dlt: (state, action) => {
            state.value = state.value.filter(
                (e) => e.id !==action.payload
            )
        }
    }
})

export const {add, dlt } = TodoSlice.actions;
export default TodoSlice.reducer;