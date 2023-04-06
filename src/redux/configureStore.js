import { configureStore } from "@reduxjs/toolkit";
import messageSlice  from "./greetingdata";

const store = configureStore({
     reducer: {
       message : messageSlice,
     }
});

export default store;