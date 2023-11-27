import { createSlice } from "@reduxjs/toolkit";
import posts from "../posts.json";

if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

const initialState = {
  value: JSON.parse(localStorage.getItem("posts")),
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removePost(state, action) {
      const newState = state.value.posts.filter((post) => {
        if (post.id != action.payload) {
          return post;
        }
      });
      for (let i = 0; i < newState.length; i++) {
        newState[i].id = i + 1;
      }
      state.value.posts = newState;
    },
    addNewPost(state) {
      const id = state.value.posts.length + 1;
      const date = new Date();
      const today = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      state.value.posts.push({
        id: id,
        title: `New post #${id}`,
        date: today,
        content: "",
      });
    },
    editPost(state, action) {
      const id = action.payload.id;
      const title = action.payload.title;
      const date = action.payload.date;
      const content = action.payload.content;

      state.value.posts.find((post) => post.id == id).title = title;
      state.value.posts.find((post) => post.id == id).date = date;
      state.value.posts.find((post) => post.id == id).content = content;
    },
  },
});

export default postsSlice.reducer;
export const { removePost, addNewPost, editPost } = postsSlice.actions;
