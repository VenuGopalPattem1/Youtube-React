import { configureStore } from "@reduxjs/toolkit";
import navSlicer from "./navSlicer";
import chartSlice  from "./chartSlice";
import searchSlice from "./searchSlice";

export default configureStore({
    reducer:{
        nav:navSlicer,
        chat:chartSlice,
        searrch:searchSlice,
    }
})