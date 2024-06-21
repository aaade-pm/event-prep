import { configureStore } from "@reduxjs/toolkit";
import vendorsReducer from "../redux/slices/vendorsSlice";

const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
