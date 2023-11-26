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
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <Error />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
    loader: ({ params }) => {
      return params.postId;
    },
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
