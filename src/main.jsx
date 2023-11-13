import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Posts from "./components/Posts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Admin from "./components/Admin.jsx";
import PostsContext from "./context/PostsContext.jsx";
import posts from "./posts.json";
import Post from "./components/Post.jsx";

if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

const blogPosts = localStorage.getItem("posts");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: (
      <PostsContext.Provider value={blogPosts}>
        <Posts />
      </PostsContext.Provider>
    ),
  },
  {
    path: "/posts/:postId",
    element: (
      <PostsContext.Provider value={blogPosts}>
        <Post />
      </PostsContext.Provider>
    ),
    loader: ({ params }) => {
      return params.postId;
    },
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
