import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'numberCounter',
    initialState:{
        number:0,
        name:'shamilka'
    },
    reducers: {
        increment: (state) =>{
            state.number +=1
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer