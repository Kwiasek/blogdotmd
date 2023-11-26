import { createSlice } from "@reduxjs/toolkit";
import posts from "../posts.json";

const initialState = {
  value: posts,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
