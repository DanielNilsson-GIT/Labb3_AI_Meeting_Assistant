import { configureStore } from "@reduxjs/toolkit";
import toolioReducer from "../reducers/toolSlice";

const store = configureStore({
    reducer: {
        tool: toolioReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
