import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./utilities/counterSlice.js";

export default configureStore({
    reducer:{
        counter: counterSlice
    }
})