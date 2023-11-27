import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: postsReducer,
});

export default store;
export const RootState = store.getState();
