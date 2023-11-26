import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Posts from "./components/Posts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Admin from "./components/Admin.jsx";
import Post from "./components/Post.jsx";
import { Provider } from "react-redux";
import store from "./state/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
